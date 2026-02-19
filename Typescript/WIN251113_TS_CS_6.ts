/**
 * TypeScript Case Study 6: Built in Types in Typescript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Create a function processTransaction that takes an amount (number), a description (string), and a flag isCredit (boolean).
function processTransaction(
    amount: number,
    isCredit: boolean,
    description?: string,
): string {
    const transactionType: string = isCredit ? "Credit" : "Debit";

    // 2. If the amount is negative, the function should throw an error (never).
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }

    // 3. If the description is missing, use undefined and handle it in the function.
    if (description === undefined) {
        description = "No description provided";
    }

    return `Transaction: ${transactionType} of Rs${amount.toFixed(2)} - ${description}`;
}

// Example usage:
try {
    const result1 = processTransaction(1500, true, "Salary credited");
    // 4. Print a summary of the transaction.
    console.log(result1);
    // OUTPUT:
    // Transaction: Credit of Rs1500.00 - Salary credited

    const result2 = processTransaction(200, false);
    console.log(result2);
    // OUTPUT:
    // Transaction: Debit of Rs200.00 - No description provided

    // Throws an error and goes to catch block
    // const result3 = processTransaction(-500, false);
} catch (error) {
    console.error(error);
    // ERROR: Amount cannot be negative
}
