import { getPaymentsList } from "@/entities/payments/api";
import { calculatePaymentsStats } from "@/features/dashbaord/lib/calculate-payment-stats";

export default async function usePaymentsData() {
  const paymentsData = await getPaymentsList();

  const paymentsStats = calculatePaymentsStats(paymentsData);

  return {
    raw: paymentsData,
    stats: paymentsStats
  };
}
