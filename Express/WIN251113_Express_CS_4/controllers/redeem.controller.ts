import { Request, Response } from "express";
import { findCustomer } from "../services/customer.service";
import InsufficientPointsError from "../errors/insufficient-points.error";
import CustomerNotFound from "../errors/customer-not-found.error";

// Logic to redeem points
const redeemPoints = (req: Request, res: Response) => {
  const customer = findCustomer(req.body.customerId);
  if (!customer) {
    throw new CustomerNotFound();
  }
  if (customer.points < req.body.points) {
    throw new InsufficientPointsError(); // Caught by global middleware
  }

  // ...redeem points...
  // Business logic here
  customer.points += req.body.points;
  res.json({
    status: "success",
    message: `Redeemed ${customer.points} points for ${customer.id}`,
  });
};

export default redeemPoints;
