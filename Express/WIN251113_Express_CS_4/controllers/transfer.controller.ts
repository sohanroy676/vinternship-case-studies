import { Request, Response } from "express";
import InsufficientPointsError from "../errors/insufficient-points.error";
import CustomerNotFound from "../errors/customer-not-found.error";
import { customers, findCustomer } from "../services/customer.service";

const transferPoints = (req: Request, res: Response) => {
  const { fromCustomerId, toCustomerId, points } = req.body;
  const fromCustomer = findCustomer(fromCustomerId);
  const toCustomer = findCustomer(toCustomerId);

  // 3. Return appropriate errors for each failure case.
  if (!fromCustomer || !toCustomer) {
    throw new CustomerNotFound();
  }
  if (fromCustomer.points < points) {
    throw new InsufficientPointsError();
  }
  if (!fromCustomer || !toCustomer) {
    throw new CustomerNotFound();
  }
  if (fromCustomer.points < points) {
    throw new InsufficientPointsError(); // Caught by global middleware
  }

  fromCustomer.points -= points;
  toCustomer.points += points;

  res.json({
    status: "success",
    message: `Transferring ${points} from ${fromCustomerId} to ${toCustomerId}`,
  });
};

export default transferPoints;
