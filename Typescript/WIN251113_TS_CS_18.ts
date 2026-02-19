/**
 * TypeScript Case Study 18: Dependency Injection
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

interface PaymentGateway {
    processPayment(amount: number): Promise<boolean>;
}

class StripeGateway implements PaymentGateway {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing payment of $${amount} via Stripe.`);
        // Simulate API call...
        return true;
    }
}

class PaypalGateway implements PaymentGateway {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing payment of $${amount} via PayPal.`);
        // Simulate API call...
        return true;
    }
}

class PaymentProcessor {
    constructor(private gateway: PaymentGateway) {}

    async pay(amount: number): Promise<void> {
        const success = await this.gateway.processPayment(amount);
        if (success) {
            console.log("Payment successful!");
        } else {
            console.log("Payment failed!");
        }
    }
}

const stripeGateway = new StripeGateway();
const paypalGateway = new PaypalGateway();

const processor1 = new PaymentProcessor(stripeGateway);
// OUTPUT: Processing payment of $100 via Stripe.
processor1.pay(100); // Uses Stripe, Payment succeeds

const processor2 = new PaymentProcessor(paypalGateway);
// OUTPUT: Processing payment of $200 via PayPal.
processor2.pay(200); // Uses PayPal, Payment succeeds

class MockGateway implements PaymentGateway {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Mock processing payment of $${amount}.`);
        return true;
    }
}

const mockGateway = new MockGateway();
const testProcessor = new PaymentProcessor(mockGateway);
// OUTPUT: Mock processing payment of $50.
testProcessor.pay(50); // Uses mock gateway for testing, Payment succeeds

// 1. Implement a new gateway class BankTransferGateway that logs payment processing.
class BankTransferGateway implements PaymentGateway {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing payment of $${amount} via Bank Transfer.`);
        return true;
    }
}

// 2. Use it with PaymentProcessor to process a payment.
const bankTransferGateway = new BankTransferGateway();
const bankProcessor = new PaymentProcessor(bankTransferGateway);
bankProcessor.pay(300); // Uses Bank Transfer, Payment succeeds
// OUTPUT: Processing payment of $300 via Bank Transfer.

// 3. Write a mock gateway that simulates failure (return false) and test error handling.
class FailingGateway implements PaymentGateway {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Simulating failed payment of $${amount}.`);
        return false;
    }
}

const failingGateway = new FailingGateway();
const failingProcessor = new PaymentProcessor(failingGateway);
failingProcessor.pay(400); // Payment fails
// OUTPUT: Simulating failed payment of $400.
