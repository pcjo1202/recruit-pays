import type {
  PaymentType,
  PaymentTypeName
} from "@/entities/common/model/payment-type";
import type { Payments } from "@/entities/payments/model";
import { EXCHANGE_RATE } from "@/features/payments/constants/exchange-rate";

/**
 * 결제 수단별 건수와 거래액 통계 계산
 */
export const calculatePaymentTypeStats = (
  payments: Payments[],
  paymentTypes: PaymentType[]
) => {
  // 타입 코드별 매핑 생성
  const typeMap = new Map(
    paymentTypes.map((type) => [type.type, type.description])
  );

  const typeStats: Record<PaymentTypeName, { count: number; amount: number }> =
    {
      ONLINE: { count: 0, amount: 0 },
      DEVICE: { count: 0, amount: 0 },
      MOBILE: { count: 0, amount: 0 },
      VACT: { count: 0, amount: 0 },
      BILLING: { count: 0, amount: 0 }
    };

  // 결제 수단별 건수와 거래액 계산
  payments.forEach(({ payType, amount, currency }) => {
    if (payType in typeStats) {
      const type = payType as PaymentTypeName;
      typeStats[type].count++;
      typeStats[type].amount +=
        Number(amount) * EXCHANGE_RATE[currency as "USD" | "KRW"];
    }
  });

  // 라벨, 건수, 거래액 배열로 변환
  const labels = Object.keys(typeStats).map(
    (key) => typeMap.get(key as PaymentTypeName) || key
  );
  const counts = Object.values(typeStats).map((stat) => stat.count);
  const amounts = Object.values(typeStats).map((stat) => stat.amount);

  return { labels, counts, amounts };
};
