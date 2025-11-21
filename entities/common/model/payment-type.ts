export type PaymentTypeName =
  | "ONLINE"
  | "DEVICE"
  | "MOBILE"
  | "VACT"
  | "BILLING";

export type PaymentTypeDescription =
  | "온라인"
  | "단말기"
  | "모바일"
  | "VACT"
  | "정기결제";

export interface PaymentType {
  type: PaymentTypeName;
  description: PaymentTypeDescription;
}

// code-description 매핑
export const PAYMENT_TYPE_CODE_DESCRIPTION = {
  ONLINE: "온라인",
  DEVICE: "단말기",
  MOBILE: "모바일",
  VACT: "VACT",
  BILLING: "정기결제"
} as const;
