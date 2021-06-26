import * as express from "express";
import {
  BaseHttpController,
  controller,
  httpGet,
} from "inversify-express-utils";

@controller("/")
class IndexHandler extends BaseHttpController {
  @httpGet("/")
  public index(_req: express.Request, res: express.Response) {
    res.status(200).json({
      msg: "Welcome to minimal TS Inversify Docker",
    });
  }
}

export default IndexHandler;
