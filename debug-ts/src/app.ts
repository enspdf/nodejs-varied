import "reflect-metadata";

import * as express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify.config";
import "./App/controllers/indexHandler";

class App {
  public port?: number;
  private server: InversifyExpressServer;
  private app: express.Application;

  constructor() {
    this.port = 8889;
    this.server = new InversifyExpressServer(container);
  }

  public initConfig() {
    this.server.setConfig((app: express.Application) => {
      app.use(express.json({ limit: "5mb" }));
    });
  }

  public build() {
    this.app = this.server.build();
  }

  public listen() {
    this.app.listen(this.port, () =>
      console.log(`Example app listening at http://localhost:${this.port}`)
    );
  }
}

export default App;
