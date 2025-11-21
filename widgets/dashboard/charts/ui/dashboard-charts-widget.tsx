import ChartCard from "@/features/dashbaord/ui/chart-card";

export default function DashboardChartsWidget() {
  return (
    <section className="grid grid-cols-2 gap-4">
      {/* payments */}
      <ChartCard
        title="결제 상태별 분포"
        description="총 10,000건"
        chart={<div>도넛 차트</div>}
      />
      <ChartCard
        title="결제 수단별 통계"
        description="건수 및 거래액 통계"
        chart={<div>바 차트</div>}
      />
      {/* merchants */}
      <ChartCard
        title="가맹점 상태 분포"
        description="총 1,615개 가맹점"
        chart={<div>바 차트</div>}
      />
      <ChartCard
        title="업종별 가맹점 분포"
        description="총 1,615개 가맹점"
        chart={<div>파이 차트</div>}
      />
    </section>
  );
}
