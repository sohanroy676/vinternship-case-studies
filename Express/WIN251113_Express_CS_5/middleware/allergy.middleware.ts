import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";
import { NextFunction, Request, Response } from "express";

// Allergy Check Middleware
@Middleware({ type: "before" })
export class AllergyMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    const { ingredients } = req.body as { ingredients: string[] };
    if (ingredients && ingredients.includes("peanuts")) {
      throw new Error("Peanut allergy alert!");
    }
    next();
  }
}

// // Attach to the order workflow
// @UseBefore(AllergyMiddleware)
// @Post("/orders")
// createOrder(@Body() order: Order) { ... }
