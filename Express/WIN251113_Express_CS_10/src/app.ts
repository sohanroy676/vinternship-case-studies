import "reflect-metadata";

import { Container } from "typedi";
import { AppointmentService } from "./appointments/AppointmentService";
import {
  NOTIFICATION_SERVICE_TOKEN,
  NotificationService,
} from "./notifications/NotificationService";
import { BILLING_SERVICE_TOKEN, BillingService } from "./billing/BillingService";

// 3. Write a test using a mock billing service to verify the charge is made.
class MockNotifier implements NotificationService {
  messages: string[] = [];
  async send(to: string, message: string) {
    this.messages.push(`${to}: ${message}`);
    console.log(`Messages: ${this.messages}`);
  }
}

class MockBilling implements BillingService {
  charges: string[] = [];
  async charge(patient: string, amount: number) {
    this.charges.push(`${patient}: $${amount}`);
    console.log(`Charges: ${this.charges}`);
  }
}

async function main() {
  const appointmentService = Container.get(AppointmentService);
  await appointmentService.bookAppointment("alice@example.com", "Monday 10am", 50);

  // Test setup
  Container.set(NOTIFICATION_SERVICE_TOKEN, new MockNotifier());
  Container.set(BILLING_SERVICE_TOKEN, new MockBilling());

  console.log("Running the test with MockNotifier and MockBilling");
  const service = Container.get(AppointmentService);
  await service.bookAppointment("bob@example.com", "Tuesday 2pm", 75);
}

main();
