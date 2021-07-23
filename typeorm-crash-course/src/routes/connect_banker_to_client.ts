import express, { Request, Response } from "express";
import { Client } from "../entities/Client";
import { Banker } from "../entities/Banker";

const router = express.Router();

router.put(
  "/api/banker/:bankerId/client/:clientId",
  async (req: Request, res: Response) => {
    const { bankerId, clientId } = req.params;

    const client = await Client.findOne(parseInt(clientId));
    const banker = await Banker.findOne(parseInt(bankerId));

    if (!banker || !client) {
      return res.json({ msg: "Banker or client not found" });
    }

    banker.clients = [client];
    await banker.save();

    return res.json({ msg: "Banker connected to client" });
  }
);

export { router as connectBankerToClientRouter };
