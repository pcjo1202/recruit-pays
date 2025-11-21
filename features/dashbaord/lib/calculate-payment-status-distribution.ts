import type {
  PaymentStatus,
  PaymentStatusCodeType
} from "@/entities/common/model/payment-status";
import type { Payments } from "@/entities/payments/model";

/**
 * 결제 상태별 건수 분포 계산
 */
export const calculatePaymentStatusDistribution = (
  payments: Payments[],
  paymentStatuses: PaymentStatus[]
) => {
  // 상태 코드별 매핑 생성
  const statusMap = new Map(
    paymentStatuses.map((status) => [status.code, status.description])
  );

  const statusCounts: Record<PaymentStatusCodeType, number> = {
    PENDING: 0,
    SUCCESS: 0,
    FAILED: 0,
    CANCELLED: 0
  };

  // 결제 상태별 건수 계산
  payments.forEach(({ status }) => {
    if (status in statusCounts) {
      statusCounts[status as PaymentStatusCodeType]++;
    }
  });

  // 라벨과 데이터 배열로 변환
  const labels = Object.keys(statusCounts).map(
    (key) => statusMap.get(key as PaymentStatusCodeType) || key
  );
  const data = Object.values(statusCounts);

  return { labels, data };
};
