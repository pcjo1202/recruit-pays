import useDashboardData from "@/features/dashbaord/model/use-dashboard-data";
import ChartCard from "@/features/dashbaord/ui/chart-card";
import MerchantBiztypeChart from "@/features/dashbaord/ui/merchant-biztype-chart";
import MerchantStatusChart from "@/features/dashbaord/ui/merchant-status-chart";
import PaymentStatusChart from "@/features/dashbaord/ui/payment-status-chart";
import PaymentTypeChart from "@/features/dashbaord/ui/payment-type-chart";
import { use } from "react";

export default function DashboardChartsWidget() {
  const { payments, merchants } = use(useDashboardData());

  const totalPayments = payments.stats.totalCount;
  const totalMerchants = merchants.stats.totalCount;

  return (
    <section className="grid grid-cols-2 gap-4">
      {/* payments */}
      <ChartCard
        title="결제 상태별 분포"
        description={`총 ${totalPayments.toLocaleString()}건`}
        chart={<PaymentStatusChart data={payments.charts.statusDistribution} />}
      />
      <ChartCard
        title="결제 수단별 통계"
        description="건수 및 거래액 통계"
        chart={<PaymentTypeChart data={payments.charts.typeStats} />}
      />
      {/* merchants */}
      <ChartCard
        title="가맹점 상태 분포"
        description={`총 ${totalMerchants.toLocaleString()}개 가맹점`}
        chart={
          <MerchantStatusChart data={merchants.charts.statusDistribution} />
        }
      />
      <ChartCard
        title="업종별 가맹점 분포"
        description={`총 ${totalMerchants.toLocaleString()}개 가맹점`}
        chart={
          <MerchantBiztypeChart data={merchants.charts.biztypeDistribution} />
        }
      />
    </section>
  );
}
