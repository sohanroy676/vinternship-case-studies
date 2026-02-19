import { z } from "zod";

const RedeemSchema = z.object({
  customerId: z.string().uuid(),
  points: z.number().int().positive(),
});

export default RedeemSchema;
