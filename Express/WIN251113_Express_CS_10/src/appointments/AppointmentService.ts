// appointments/AppointmentService.ts
import Container, { Service } from "typedi";
import {
  NotificationService,
  NOTIFICATION_SERVICE_TOKEN,
} from "../notifications/NotificationService";
import { BILLING_SERVICE_TOKEN, BillingService } from "../billing/BillingService";
import { SMSService } from "../notifications/SMSService";
import { StripeBillingService } from "../billing/StripeBillingService";

@Service()
export class AppointmentService {
  constructor() {
    Container.set(NOTIFICATION_SERVICE_TOKEN, new SMSService());
    // 2. Inject BillingService into AppointmentService to charge patients when booking.
    Container.set(BILLING_SERVICE_TOKEN, new StripeBillingService());
  }

  private getNotifier() {
    return Container.get<NotificationService>(NOTIFICATION_SERVICE_TOKEN);
  }

  private getBilling() {
    return Container.get<BillingService>(BILLING_SERVICE_TOKEN);
  }

  async bookAppointment(patient: string, time: string, amount: number) {
    await this.getBilling().charge(patient, amount);
    await this.getNotifier().send(patient, `Your appointment is booked for ${time}`);
    return { status: "confirmed" };
  }
}
