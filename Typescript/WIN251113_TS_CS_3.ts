/**
 * TypeScript Case Study 3: Variables in Typescript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Declare a variable called city and assign it your favorite city as a string.
let city: string = "Hyderabad";

// 2. Declare a variable called temperature with type number and assign it a value.
let temperature: number = 32;

// 3. Create a variable called isRaining and let TypeScript infer its type from the value you assign.
let isRaining = false;

// 4. Write a function called weatherReport that takes city, temperature, and isRaining as parameters and prints a message like:
// "In <city>, it is <temperature>°C. Is it raining? <true/false>"
function weatherReport(
    city: string,
    temperature: number,
    isRaining: boolean,
): void {
    console.log(
        `In ${city}, it is ${temperature}C. Is it raining? ${isRaining}`,
    );
}

// 5. Try calling the function with your variables.
weatherReport(city, temperature, isRaining);
// OUTPUT: In Hyderabad, it is 32C. Is it raining? false
