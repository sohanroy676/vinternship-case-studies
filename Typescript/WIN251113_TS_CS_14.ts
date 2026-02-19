/**
 * TypeScript Case Study 14: Generics
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

// 1. Write a generic class FeedbackBox<T> that stores feedback items of any type and lets you retrieve them all.
class FeedbackBox<T> {
    private feedbackItems: T[] = [];

    addFeedback(feedback: T): void {
        this.feedbackItems.push(feedback);
    }

    getFeedback(): T[] {
        return this.feedbackItems;
    }
}

// Example usage:
const stringFeedbackBox = new FeedbackBox<string>();
stringFeedbackBox.addFeedback("Good");
stringFeedbackBox.addFeedback("Should be improved");
console.log(stringFeedbackBox.getFeedback());
// OUTPUT: [ 'Good', 'Should be improved' ]

// 2. Write a generic function getFirstItem<T> that returns the first item from any array.
function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}

// Example usage:
console.log(getFirstItem<string>(["Item 1", "Item 2", "Item 3"]));
// OUTPUT: Item 1
