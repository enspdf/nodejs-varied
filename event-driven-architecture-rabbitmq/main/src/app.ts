import * as express from "express";
import * as cors from "cors";
import { createConnection } from "typeorm";
import * as amqp from "amqplib/callback_api";

createConnection().then((db) => {
  amqp.connect(
    "amqps://ohsihqoh:HWieklFgIFyFfQ1-owGBohT6LItIkz4H@beaver.rmq.cloudamqp.com/ohsihqoh",
    (error0, connection) => {
      if (error0) {
        throw error0;
      }

      connection.createChannel((error1, channel) => {
        if (error1) {
          throw error1;
        }

        channel.assertQueue("hello", {});

        const app = express();

        app.use(
          cors({
            origin: [
              "http://localhost:3000",
              "http://localhost:8080",
              "http://localhost:4200",
            ],
          })
        );

        app.use(express.json());

        channel.consume("hello", (msg) => {
          console.log(msg.content.toString());
        });

        app.listen(8001, () => console.log("Listening on port 8001"));
        process.on("beforeExit", () => {
          console.log("closing");
          connection.close();
        });
      });
    }
  );
});
