import { Service } from "typedi";
import { BillingService } from "./BillingService";

// 2. Add a BillingService interface and a StripeBillingService implementation.
@Service()
export class StripeBillingService implements BillingService {
  async charge(patient: string, amount: number) {
    console.log(`Charged $${amount} to ${patient} via Stripe`);
  }
}
