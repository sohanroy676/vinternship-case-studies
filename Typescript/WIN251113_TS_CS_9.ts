/**
 * TypeScript Case Study 9: Type Aliases
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Define a CustomerID alias for string.
type CustomerID = string;

// 2. Create a Customer object alias with id: CustomerID, name: string, and optional email?: string.
type Customer = {
    id: CustomerID;
    name: string;
    email?: string;
};

let customer: Customer = { id: "WIN251113", name: "Sohan" };

// 3. Implement a processOrder function type alias that accepts orderId: number and a callback (status: OrderStatus) => void.
type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";
type OrderCallback = (status: OrderStatus) => void;
const processOrder: OrderCallback = (status) => {
    console.log(`Order is now ${status}`);
};
processOrder("delivered");
// OUTPUT: Order is now delivered

// 4. Use the Container<T> generic to wrap a Customer object.
type Container<T> = {
    value: T;
};

let customerContainer: Container<Customer> = {
    value: customer,
};
console.log(customerContainer);
// OUTPUT: { value: { id: 'WIN251113', name: 'Sohan' } }
