/**
 * TypeScript Case Study 16: Design Patterns
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

interface Observer {
    update(msg: string): void;
}

class CustomerObserver implements Observer {
    update(msg: string) {
        console.log("Customer:", msg);
    }
}

class Inventory implements Observer {
    update(msg: string) {
        console.log("Inventory:", msg);
    }
}

// 1. Implement a PromotionSystem observer that announces special offers to customers when a drink is served.
class PromotionSystem implements Observer {
    update(_msg: string) {
        console.log("Promotion System: Special offer available!");
    }
}

// Stores and notifies observers about drink orders.
class DrinkOrder {
    private observers: Observer[] = [];
    addObserver(obs: Observer) {
        this.observers.push(obs);
    }
    notifyAll(msg: string) {
        this.observers.forEach((obs) => obs.update(msg));
    }
    completeOrder() {
        this.notifyAll("Order complete!");
    }
}

// Usage:
const order = new DrinkOrder();
order.addObserver(new CustomerObserver());
order.addObserver(new Inventory());

// 2. Add it to the DrinkOrder notification list and test it.
order.addObserver(new PromotionSystem());
order.completeOrder();
// OUTPUT:
// Customer: Order complete!
// Inventory: Order complete!
// Promotion System: Special offer available!
