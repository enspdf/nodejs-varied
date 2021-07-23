import express, { Request, Response } from "express";
import { Client } from "../entities/Client";
import { Transaction, TransactionTypes } from "../entities/Transaction";

const router = express.Router();

router.post(
  "/api/client/:clientId/transaction",
  async (req: Request, res: Response) => {
    const { clientId } = req.params;
    const { type, amount } = req.body;

    const client = await Client.findOne(parseInt(clientId));

    if (!client) {
      return res.json({
        msg: "client not found",
      });
    }

    const transaction = Transaction.create({
      amount,
      type,
      client,
    });

    await transaction.save();

    if (type === TransactionTypes.DEPOSIT) {
      client.balance = client.balance + amount;
    } else if (type === TransactionTypes.WITHDRAW) {
      client.balance = client.balance - amount;
    }

    await client.save();

    return res.json({ msg: "transaction created" });
  }
);

export { router as createTransactionRouter };
