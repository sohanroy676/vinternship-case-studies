/**
 * TypeScript Case Study 4: let & const
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Declare a variable score with let and assign it a number.
let score: number = 100;

// 2. Inside a block (e.g., an if statement), declare another score variable with a different value and print it.
if (true) {
    let score: number = 200;
    console.log("Inner block score:", score);
    // OUTPUT: Inner block score: 200
}

// 3. Declare a constant COUNTRY and assign it your favorite country.
const COUNTRY: string = "India";

// 4. Try to change the value of COUNTRY and observe what happens
// COUNTRY = "USA"; // Error: Cannot assign to 'COUNTRY' because it is a constant.

// Try to re-declare score in the same block and see the result.
// let score: number = 300; // Error: Cannot redeclare block-scoped variable 'score'.
// Because 'score' is already declared in the same scope.
