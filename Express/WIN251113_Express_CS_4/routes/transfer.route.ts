import { Router } from "express";
import validate from "../middleware/validate";
import TransferSchema from "../schemas/transfer.schema";
import transferPoints from "../controllers/transfer.controller";

const transferRouter = Router();

// 1. Add a POST /transfer endpoint allowing customers to transfer points to another account.
transferRouter.post("/", validate(TransferSchema), transferPoints);

export default transferRouter;
