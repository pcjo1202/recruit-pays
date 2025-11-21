import DashboardChartsWidget from "@/widgets/dashboard/charts/ui/dashboard-charts-widget";
import DashboardSummaryWidget from "@/widgets/dashboard/summary/ui/dashboard-summary-widget";
import PageContentLayout from "@/widgets/layout/page-content";

export default function DashboardPage() {
  return (
    <PageContentLayout title="대시보드" description="대시보드 페이지입니다.">
      <DashboardSummaryWidget />
      <DashboardChartsWidget />
    </PageContentLayout>
  );
}
