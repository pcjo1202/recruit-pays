import { getMerchantsList } from "@/entities/merchants/api";
import { getPaymentsList } from "@/entities/payments/api";
import { calculateMerchantsStats } from "../lib/calculate-merchant-stats";
import { calculatePaymentsStats } from "../lib/calculate-payment-stats";

export default async function useDashboardData() {
  const [paymentsData, merchantsData] = await Promise.all([
    getPaymentsList(),
    getMerchantsList()
  ]);

  const paymentsStats = calculatePaymentsStats(paymentsData); // 결제 데이터 통계 계산
  const merchantsStats = calculateMerchantsStats(merchantsData); // 가맹점 데이터 통계 계산

  return {
    payments: {
      raw: paymentsData,
      stats: paymentsStats
    },
    merchants: {
      raw: merchantsData,
      stats: merchantsStats
    }
  };
}
