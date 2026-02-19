/**
 * TypeScript Case Study 1: Introduction to TypeScript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Change the message variable to your own name and print a personalized greeting.
let myName: string = "Sohan Roy Talari";
let message: string = `Hello, ${myName}! Welcome to the Pinternship program at IIT Ropar.`;
console.log(message);
// OUTPUT: Hello, Sohan Roy Talari! Welcome to the Pinternship program at IIT Ropar.

// 2. Try declaring a variable for your age and print it with a message.
let myAge: number = 19;
console.log(`I am ${myAge} years old.`);
// OUTPUT: I am 19 years old.

// 3. What happens if you try to assign a number to a variable declared as a string?
// myName = 42; // Error: Type 'number' is not assignable to type 'string'.
// Because value 42 of type 'number' cannot be assigned to variable myName of type 'string'.
