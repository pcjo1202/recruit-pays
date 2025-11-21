export type PaymentStatusCodeType =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "CANCELLED";

export type PaymentStatusDescription =
  | "결제 대기"
  | "결제 완료"
  | "결제 실패"
  | "환불 완료";

export interface PaymentStatus {
  code: PaymentStatusCodeType;
  description: PaymentStatusDescription;
}

// code-description 매핑
export const PAYMENT_STATUS_CODE_DESCRIPTION = {
  PENDING: "결제 대기",
  SUCCESS: "결제 완료",
  FAILED: "결제 실패",
  CANCELLED: "환불 완료"
} as const;
