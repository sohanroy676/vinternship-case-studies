import { Token } from "typedi";

// 1. Add a BillingService interface and a StripeBillingService implementation.
export interface BillingService {
  charge(patient: string, amount: number): Promise<void>;
}

export const BILLING_SERVICE_TOKEN = new Token<() => BillingService>("BillingServiceToken");
