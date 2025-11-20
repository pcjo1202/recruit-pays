import type { Payments } from "@/entities/payments/model";

const EXCHANGE_RATE = {
  USD: 1100,
  KRW: 1470
};

// 결제 데이터 통계 계산 (총 거래액, 총 거래 건수, 결제 상태별 분포)
export const calculatePaymentsStats = (payments: Payments[]) => {
  //총 거래액
  const totalAmount = payments.reduce((acc, { amount, currency }) => {
    return acc + Number(amount) * EXCHANGE_RATE[currency as "USD" | "KRW"];
  }, 0);

  // 총 거래 건수
  const totalCount = payments.length;

  // 결제 상태별 분포
  const statusDistribution = 0;

  return { totalAmount, totalCount, statusDistribution };
};
