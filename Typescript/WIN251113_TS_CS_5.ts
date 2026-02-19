/**
 * TypeScript Case Study 5: Any type in Typescript
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// Object to store the answers
const answers: { [key: string]: any } = {};

// 1. Create a function recordAnswer that takes a question ID and an answer of any type, and stores it in an object.
function recordAnswer(questionId: string, answer: any): void {
    answers[questionId] = answer;
}

// 2. Add at least three answers: a string, a number, and an array.
recordAnswer("question1", "String answer");
recordAnswer("question2", 0);
recordAnswer("question3", [1, 2, 3]);

// 3. Print all recorded answers.
for (const questionId in answers) {
    console.log(`Question ID: ${questionId}, Answer: ${answers[questionId]}`);
}
// Output:
// Question ID: question1, Answer: String answer
// Question ID: question2, Answer: 0
// Question ID: question3, Answer: 1,2,3
