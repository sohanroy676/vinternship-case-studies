/**
 * TypeScript Case Study 11: Mastering Loops in TypeScript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Add a counter for each transaction type (checkout, return, priority, cancelled) using a for loop and an object.
enum TransactionType {
    Checkout = "checkout",
    Return = "return",
    Priority = "priority",
    Cancelled = "cancelled",
}

interface Transaction {
    id: number;
    type: TransactionType;
    amount: number;
}
const transactions: Transaction[] = [
    { id: 1, type: TransactionType.Checkout, amount: 100 },
    { id: 2, type: TransactionType.Return, amount: 50 },
];

const transactionCounts: { [key in TransactionType]: number } = {
    [TransactionType.Checkout]: 0,
    [TransactionType.Return]: 0,
    [TransactionType.Priority]: 0,
    [TransactionType.Cancelled]: 0,
};

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    transactionCounts[transaction.type]++;
}

console.log("Transaction Counts:", transactionCounts);
// Output: Transaction Counts: { checkout: 1, return: 1, priority: 0, cancelled: 0 }

// 2. Use a while(true) infinite loop with a break condition when a new priority transaction arrives.
let newTransaction: Transaction | null = null;
let time: number = 0;
while (true) {
    // Simulating receiving a new transaction after some time
    time++;
    if (time > 5) {
        newTransaction = { id: 3, type: TransactionType.Priority, amount: 200 };
        console.log(
            `New Priority Transaction Received at ${time}:`,
            newTransaction,
        );
        // OUTPUT: New Priority Transaction Received at 6: { id: 3, type: 'priority', amount: 200 }
    }
    if (newTransaction && newTransaction.type === TransactionType.Priority) {
        break;
    }
}

// 3. Modify the do…while loop to handle a dynamic queue (an array you can push new returns into).
let queue: Transaction[] = [];
let i = 0;
do {
    if (transactions[i].type === TransactionType.Return) {
        queue.push(transactions[i]);
    }
    i++;
} while (i < transactions.length);
console.log("Return Queue:", queue);
// Output: Return Queue: [ { id: 2, type: 'return', amount: 50 } ]

// 4. Use for…in to reset all inventory counts to zero.
const inventoryCounts: { [key in TransactionType]: number } = {
    [TransactionType.Checkout]: 4,
    [TransactionType.Return]: 3,
    [TransactionType.Priority]: 2,
    [TransactionType.Cancelled]: 1,
};
for (const type in inventoryCounts) {
    inventoryCounts[type as TransactionType] = 0;
}
console.log("Reset Inventory Counts:", inventoryCounts);
// Output: Reset Inventory Counts: { checkout: 0, return: 0, priority: 0, cancelled: 0 }

// 5. Display visitor names in reverse order using a for or for…of loop.
const visitors: string[] = ["Person 1", "Person 2", "Person 3", "Person 4"];
console.log("Visitors in Reverse Order:");
for (let j = visitors.length - 1; j >= 0; j--) {
    console.log(visitors[j]);
}
// Output:
// Visitors in Reverse Order:
// Person 4
// Person 3
// Person 2
// Person 1
