/**
 * TypeScript Case Study 10: Conditional Logic in TypeScript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// Implement four small functions to practice each decision-making construct:

// 1. checkSign(num: number): void
function checkSign(num: number): void {
    // Use an if statement to log whether num is positive.
    if (num > 0) {
        console.log(`${num} is positive`);
    } else {
        console.log(`${num} is not positive`);
    }
}
checkSign(10); // OUTPUT: 10 is positive
checkSign(-10); // OUTPUT: -10 is not positive

// 2. evenOrOdd(num: number): void
function evenOrOdd(num: number): void {
    // Use an if…else to log whether num is even or odd.
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
evenOrOdd(1); // OUTPUT: 1 is odd
evenOrOdd(2); // OUTPUT: 2 is even

// 3. getGrade(score: number): string
function getGrade(score: number): string {
    // Use an if…else if…else ladder to return a letter grade:
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// 4. provideFeedback(grade: string): void
function provideFeedback(grade: string): void {
    // Use a switch to log a feedback message for each grade ("A"… "F"), with a default for any unexpected value.
    let feedback: string;
    switch (grade) {
        case "A":
            feedback = "Excellent";
            break;
        case "B":
            feedback = "Good";
            break;
        case "C":
            feedback = "Satisfactory";
            break;
        case "D":
            feedback = "Passed";
            break;
        case "F":
            feedback = "Failed";
            break;
        default:
            feedback = "Invalid grade.";
    }
    console.log("Feedback:", feedback);
}
let grade1 = getGrade(100); // grade1 = "A"
provideFeedback(grade1);
// OUTPUT:
// Feedback: Excellent
let grade2 = getGrade(50); // grade2 = "F"
provideFeedback(grade2);
// OUTPUT:
// Feedback: Failed
