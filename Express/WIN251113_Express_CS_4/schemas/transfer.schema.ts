import { z } from "zod";

// 2. Validate:
// 2.a Both fromCustomerId and toCustomerId must be valid UUIDs.
// 2.b points must be a positive integer.
const TransferSchema = z.object({
  fromCustomerId: z.string().uuid(),
  toCustomerId: z.string().uuid(),
  points: z.number().int().positive(),
});

export default TransferSchema;
