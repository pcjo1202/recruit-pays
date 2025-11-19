export type PaymentStatusCodeType =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "CANCELLED";

export interface PaymentStatus {
  code: PaymentStatusCodeType;
  description: string;
}
