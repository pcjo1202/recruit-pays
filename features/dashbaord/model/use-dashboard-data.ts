import {
  getMchtStatus,
  getPaymentStatus,
  getPaymentType
} from "@/entities/common/api";
import { getMerchantsList } from "@/entities/merchants/api";
import { getPaymentsList } from "@/entities/payments/api";
import { calculateMerchantBiztypeDistribution } from "../lib/calculate-merchant-biztype-distribution";
import { calculateMerchantsStats } from "../lib/calculate-merchant-stats";
import { calculateMerchantStatusDistribution } from "../lib/calculate-merchant-status-distribution";
import { calculatePaymentsStats } from "../lib/calculate-payment-stats";
import { calculatePaymentStatusDistribution } from "../lib/calculate-payment-status-distribution";
import { calculatePaymentTypeStats } from "../lib/calculate-payment-type-stats";

export default async function useDashboardData() {
  const [
    paymentsData,
    merchantsData,
    paymentStatuses,
    paymentTypes,
    mchtStatuses
  ] = await Promise.all([
    getPaymentsList(),
    getMerchantsList(),
    getPaymentStatus(),
    getPaymentType(),
    getMchtStatus()
  ]);

  const paymentsStats = calculatePaymentsStats(paymentsData); // 결제 데이터 통계 계산
  const merchantsStats = calculateMerchantsStats(merchantsData); // 가맹점 데이터 통계 계산

  // 차트 데이터 계산
  const paymentStatusDistribution = calculatePaymentStatusDistribution(
    paymentsData,
    paymentStatuses
  ); // 결제 상태별 분포 계산
  const paymentTypeStats = calculatePaymentTypeStats(
    paymentsData,
    paymentTypes
  ); // 결제 수단별 통계 계산
  const merchantStatusDistribution = calculateMerchantStatusDistribution(
    merchantsData,
    mchtStatuses
  ); // 가맹점 상태별 분포 계산
  const merchantBiztypeDistribution =
    calculateMerchantBiztypeDistribution(merchantsData); // 업종별 가맹점 분포 계산

  return {
    payments: {
      raw: paymentsData,
      stats: paymentsStats,
      charts: {
        statusDistribution: paymentStatusDistribution,
        typeStats: paymentTypeStats
      }
    },
    merchants: {
      raw: merchantsData,
      stats: merchantsStats,
      charts: {
        statusDistribution: merchantStatusDistribution,
        biztypeDistribution: merchantBiztypeDistribution
      }
    }
  };
}
