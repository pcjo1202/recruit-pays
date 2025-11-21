import SummaryCard from "@/features/dashbaord/ui/summary-card";
import { CheckCircle2Icon, StoreIcon } from "lucide-react";

interface MerchantsSummaryWidgetProps {
  merchantsStats: {
    totalCount: number;
    activeCount: number;
  };
}

export default function MerchantsSummaryWidget({
  merchantsStats
}: MerchantsSummaryWidgetProps) {
  const { totalCount, activeCount } = merchantsStats;
  return (
    <div className="flex gap-4 w-full">
      <SummaryCard
        title="전체 가맹점 수"
        value={totalCount.toLocaleString()}
        icon={<StoreIcon />}
      />
      <SummaryCard
        title="활성 가맹점 수"
        value={activeCount.toLocaleString()}
        icon={<CheckCircle2Icon />}
      />
    </div>
  );
}
