import { Order } from "../models/order.model";

const orders: Order[] = [];

export default orders;

export function getAllOrders() {
  return orders;
}
