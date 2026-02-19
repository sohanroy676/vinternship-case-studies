// Loyalty program interfaces
interface RedeemRequest {
  customerId: string;
  points: number;
}

interface ApiResponse<T = any> {
  status: "success" | "error";
  data?: T;
  error?: string;
}
