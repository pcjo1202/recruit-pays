import useDashboardData from "@/features/dashbaord/model/use-dashboard-data";
import MerchantsSummaryWidget from "@/widgets/merchants/summary/ui/merchants-summary-widget";
import PaymentsSummaryWidget from "@/widgets/payments/summary/ui/payments-summary-widget";
import { use } from "react";

export default function DashboardSummaryWidget() {
  const { payments, merchants } = use(useDashboardData());

  return (
    <section className="grid grid-cols-2 gap-4">
      <PaymentsSummaryWidget paymentsStats={payments.stats} />
      <MerchantsSummaryWidget merchantsStats={merchants.stats} />
    </section>
  );
}
