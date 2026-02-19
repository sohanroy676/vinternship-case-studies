/**
 * TypeScript Case Study 2: Basic Syntax in Typescript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Create a variable for your favorite fruit and print it.
let favoriteFruit: string = "Mango";
console.log("My favorite fruit is:", favoriteFruit);
// Output: My favorite fruit is: Mango

// 2. Write a function that takes a number and prints double its value.
function printDouble(value: number): void {
    console.log(`Double the value of ${value} is:`, value * 2);
}
printDouble(5);
// Output: Double the value of 5 is: 10

// 3. Add a single-line and a multi-line comment to your code.
// This is a single-line comment
/* 
    This is a 
    multi-line comment
*/

// 4. Define a class called Person with a method sayHello that prints a greeting
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHello(): void {
        console.log("Hello, my name is", this.name);
    }
}

// Creating an instance of Person and calling sayHello
let sohan = new Person("Sohan");
sohan.sayHello();
// Output: Hello, my name is Sohan
