import { createConnection } from "typeorm";
import express from "express";

import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTransactionRouter } from "./routes/create_transaction";
import { connectBankerToClientRouter } from "./routes/connect_banker_to_client";
import { deleteClientRouter } from "./routes/delete_client";

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: undefined,
      database: "typeorm-crash-course",
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });

    console.log("Connected to database");

    app.use(express.json());
    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(createTransactionRouter);
    app.use(connectBankerToClientRouter);
    app.use(deleteClientRouter);

    app.listen(8080, () => console.log("Running on port 8080"));
  } catch (error) {
    console.log(error);

    throw new Error("Unable to connect to the database");
  }
};

main();
