/**
 * TypeScript Case Study 17: Classes & Access Modifiers
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// Abstract class: the blueprint for all content
abstract class Content {
    public readonly title: string;
    public readonly author: string;
    private published: boolean = false;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public publish() {
        this.published = true;
    }

    protected isPublished(): boolean {
        return this.published;
    }

    // Every content type must say what type it is
    abstract getType(): string;
}

class Quiz extends Content {
    private questions: string[] = [];

    constructor(title: string, author: string, questions: string[] = []) {
        super(title, author);
        this.questions = questions;
    }

    public addQuestion(question: string, isInstructor: boolean) {
        if (!this.isPublished() && isInstructor) {
            this.questions.push(question);
        } else {
            throw new Error(
                "Cannot add questions after publishing or if not an instructor.",
            );
        }
    }

    public getQuestions(): string[] {
        return [...this.questions];
    }

    getType(): string {
        return "Quiz";
    }
}

class Lesson extends Content {
    private content: string;

    constructor(title: string, author: string, content: string) {
        super(title, author);
        this.content = content;
    }

    public editContent(newContent: string, isInstructor: boolean) {
        if (!this.isPublished() && isInstructor) {
            this.content = newContent;
        } else {
            throw new Error(
                "Cannot edit content after publishing or if not an instructor.",
            );
        }
    }

    public getContent(): string {
        return this.content;
    }

    getType(): string {
        return "Lesson";
    }
}

// 1. Create an Assignment class extending Content.
class Assignment extends Content {
    // 2. Add a dueDate property (private).
    private dueDate: Date;

    constructor(title: string, author: string, dueDate: Date) {
        super(title, author);
        this.dueDate = dueDate;
    }

    // 3. Allow only instructors to set or update the due date before publishing.
    public setDueDate(newDueDate: Date, isInstructor: boolean) {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = newDueDate;
            console.log(`Due date updated to: ${this.dueDate.toDateString()}`);
        } else {
            throw new Error(
                "Cannot set/update due date after publishing or if not an instructor.",
            );
        }
    }

    // 4. Implement getType() returning "Assignment"
    getType(): string {
        return "Assignment";
    }
}

// Example usage:
const assignment = new Assignment(
    "Math Homework",
    "Prof. Professor",
    new Date("2024-10-01"),
);
console.log(assignment.getType()); // OUTPUT: "Assignment"
assignment.setDueDate(new Date("2026-01-20"), true); // Update due date as instructor
// OUTPUT:
// Due date updated to: Tue Jan 20 2026

// assignment.dueDate; // Error: Property 'dueDate' is private and only accessible within class 'Assignment'.

// assignment.setDueDate(new Date("2026-01-25"), false); // Error: Cannot set/update due date after publishing or if not an instructor.
// Because the user is not an instructor

assignment.publish();

// assignment.setDueDate(new Date("2026-10-30"), true); // Error: Cannot set/update due date after publishing or if not an instructor.
// Because the assignment has aleady been published
