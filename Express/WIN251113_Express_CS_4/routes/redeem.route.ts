import { Router } from "express";
import RedeemSchema from "../schemas/redeem.schema";
import validate from "../middleware/validate";
import redeemPoints from "../controllers/redeem.controller";

const redeemRouter = Router();

// Usage
redeemRouter.post("/", validate(RedeemSchema), redeemPoints);

export default redeemRouter;
