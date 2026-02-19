/**
 * TypeScript Case Study 13: Optional and Default Parameters in TypeScript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. describePerson
function describePerson(name: string, age?: number): void {
    /*
    Required: name: string
    Optional: age?: number
    Print "Name: <name>, Age: <age>" or "Name: <name>, Age: Unknown".
    */
    console.log(`Name: ${name}, Age: ${age || "Unknown"}`);
}

// 2. calculatePrice
function calculatePrice(basePrice: number, discount: number = 0.1): number {
    /*
    Required: basePrice: number
    Default: discount: number = 0.1
    Return price after discount.
    */
    return basePrice * (1 - discount);
}

// 3. Test calls:
describePerson("Eve");
// OUTPUT:
// Name: Eve, Age: Unknown

describePerson("Frank", 28);
// OUTPUT:
// Name: Frank, Age: 28

console.log(calculatePrice(100)); // OUTPUT: 90
console.log(calculatePrice(100, 0.2)); // OUTPUT: 80
