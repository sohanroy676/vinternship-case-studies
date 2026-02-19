import { randomUUID } from "crypto";

export interface Customer {
  id: string;
  points: number;
}

// Mock database
export const customers: Customer[] = [
  { id: randomUUID(), points: 150 },
  { id: randomUUID(), points: 50 },
];

export function findCustomer(id: string): Customer | undefined {
  return customers.find((c) => c.id === id);
}

export function updateCustomerPoints(id: string, newPoints: number) {
  const customer = findCustomer(id);
  if (customer) {
    customer.points = newPoints;
  }
}
