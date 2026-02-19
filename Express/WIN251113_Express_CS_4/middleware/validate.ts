import { RequestHandler } from "express";
import { z } from "zod";

// Middleware to validates the request body
export default function validate<T extends z.ZodTypeAny>(schema: T): RequestHandler {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        status: "error",
        error: result.error.issues[0].message,
      });
    }
    req.body = result.data; // Override req.body with parsed data
    next();
  };
}
