export type PaymentTypeName =
  | "ONLINE"
  | "DEVICE"
  | "MOBILE"
  | "VACT"
  | "BILLING";

export interface PaymentType {
  type: PaymentTypeName;
  description: string;
}
