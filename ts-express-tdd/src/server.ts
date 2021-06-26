import express, { Application, Request, Response, NextFunction } from "express";
import routes from "./routes";

export const createServer = () => {
  const app: Application = express();

  app.use(routes);

  app.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    res.send("Hello world");
  });

  return app;
};
