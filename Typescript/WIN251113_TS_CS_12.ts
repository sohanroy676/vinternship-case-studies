/**
 * TypeScript Case Study 12: Mastering Functions in TypeScript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Call displayMember for two members: one with email, one without.
interface Member {
    name: string;
    email?: string;
}
function displayMember(member: Member) {
    console.log(
        `Name: ${member.name}, Email: ${member.email || "Not provided"}`,
    );
}
const member1: Member = { name: "Sohan", email: "sohanroy676@gmail.com" };
const member2: Member = { name: "Json" };
displayMember(member1);
// OUTPUT:
// Name: Sohan, Email: sohanroy676@gmail.com

displayMember(member2);
// OUTPUT:
// Name: Json, Email: Not provided

// 2. Use calculateFines to sum fines: 5, 10, 2.5.
function calculateFines(...fines: number[]): number {
    return fines.reduce((total, fine) => total + fine, 0);
}
console.log("Total Fines:", calculateFines(5, 10, 2.5));
// OUTPUT:
// Total Fines: 17.5

// 3. Compute a membership fee for $100 with default discount, then with 20%.
function computeMembershipFee(baseFee: number, discount: number = 10): number {
    return baseFee * (1 - discount / 100);
}
console.log("Membership Fee (default discount):", computeMembershipFee(100));
// OUTPUT:
// Membership Fee (default discount): 90

console.log("Membership Fee (20% discount):", computeMembershipFee(100, 20));
// OUTPUT:
// Membership Fee (20% discount): 80

// 4. Greet visitors “Alice” and “Bob” using both vipGreet and consoleGreet.
function vipGreet(name: string): string {
    return `Welcome VIP member, ${name}!`;
}
function consoleGreet(name: string): void {
    console.log(`Hello, ${name}!`);
}
console.log(vipGreet("Alice")); // OUTPUT: Welcome VIP member, Alice!
console.log(vipGreet("Bob")); // OUTPUT: Welcome VIP member, Bob!
consoleGreet("Alice"); // OUTPUT: Hello, Alice!
consoleGreet("Bob"); // OUTPUT: Hello, Bob!

// 5. Compute factorial(5).
function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));
// OUTPUT:
// Factorial of 5: 120

// 6. Generate a text report and a JSON report for an array of sample objects (e.g., { title: "1984" }).
interface Book {
    title: string;
    author: string;
}

const books: Book[] = [
    { title: "1984", author: "Author1" },
    { title: "Title2", author: "Author2" },
];
function generateTextReport(books: Book[]): string {
    return books.map((book) => `${book.title} by ${book.author}`).join("\n");
}
function generateJsonReport(books: Book[]): string {
    return JSON.stringify(books, null, 2);
}
console.log("Text Report:");
console.log(generateTextReport(books));
// OUTPUT:
// Text Report:
// 1984 by Author1
// Title2 by Author2

console.log("JSON Report:");
console.log(generateJsonReport(books));
// OUTPUT:
// JSON Report:
// [
//   {"title": "1984",
//     "author": "Author1"
//   },
//   {"title": "Title2",
//     "author": "Author2"
//   }
// ]
