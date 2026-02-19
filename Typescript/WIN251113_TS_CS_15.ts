// /**
//  * TypeScript Case Study 15: Advanced Types
//  * NPTEL Pinternship - IIT Ropar
//  * by Sohan Roy Talari (WIN251113)
//  */

// // 1. Create a type called InstructorOrAdmin that can be either an Instructor or an Admin.
// type Instructor = {
//     name: string;
//     subject: string;
// };

// type Admin = {
//     name: string;
//     department: string;
// };

// type InstructorOrAdmin = Instructor | Admin;

// // Usage example:
// const person1: InstructorOrAdmin = {
//     name: "Instructor",
//     subject: "Mathematics",
// };
// const person2: InstructorOrAdmin = { name: "Admin", department: "HR" };
// console.log(person1, person2);
// // OUTPUT:
// // { name: 'Instructor', subject: 'Mathematics' } { name: 'Admin', department: 'HR' }

// // 2. Given a type Assignment = { title: string; dueDate: Date; points: number; }, create a type ReadonlyAssignment where none of the fields can be changed.
// type Assignment = {
//     title: string;
//     dueDate: Date;
//     points: number;
// };

// type ReadonlyAssignment = Readonly<Assignment>;

// // Usage example:
// const assignment: ReadonlyAssignment = {
//     title: "Math Homework",
//     dueDate: new Date("2024-12-01"),
//     points: 100,
// };

// console.log(assignment);
// // OUTPUT:
// // { title: 'Math Homework', dueDate: 2024-12-01T00:00:00.000Z, points: 100 }

// // assignment.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.

// // 3. Given a type LearnerStats = { quizzes: number; videos: number; assignments: number; }, create a type StatsAsStrings that has the same keys, but all values are strings.
// type LearnerStats = {
//     quizzes: number;
//     videos: number;
//     assignments: number;
// };

// type StatsAsStrings = {
//     [K in keyof LearnerStats]: string;
// };

// // Usage example:
// const stats: StatsAsStrings = {
//     quizzes: "10",
//     videos: "5",
//     assignments: "3",
// };

// console.log(stats);
// // OUTPUT:
// // { quizzes: '10', videos: '5', assignments: '3' }
