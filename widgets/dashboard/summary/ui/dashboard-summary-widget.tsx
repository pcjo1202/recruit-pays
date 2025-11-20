import useDashboardData from "@/features/dashbaord/model/use-dashboard-data";
import { use } from "react";
import MerchantsSummaryWidget from "./merchants-summary-widget";
import PaymentsSummaryWidget from "./payments-summary-widget";

export default function DashboardSummaryWidget() {
  const { payments, merchants } = use(useDashboardData());

  return (
    <section className="grid grid-cols-2 gap-4">
      <PaymentsSummaryWidget paymentsStats={payments.stats} />
      <MerchantsSummaryWidget merchantsStats={merchants.stats} />
    </section>
  );
}
