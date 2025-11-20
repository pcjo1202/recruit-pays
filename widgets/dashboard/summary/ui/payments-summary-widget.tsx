import SummaryCard from "@/features/dashbaord/ui/summary-card";
import { ChartLineIcon, ShoppingCartIcon } from "lucide-react";

interface PaymentsSummaryWidgetProps {
  paymentsStats: {
    totalAmount: number;
    totalCount: number;
    statusDistribution: number;
  };
}

export default function PaymentsSummaryWidget({
  paymentsStats
}: PaymentsSummaryWidgetProps) {
  const { totalAmount, totalCount } = paymentsStats;

  const formattedTotalAmount = totalAmount.toLocaleString();
  const formattedTotalCount = totalCount.toLocaleString();

  return (
    <div className="basis-1/2 flex gap-4 w-full">
      <SummaryCard
        title="총 거래액"
        value={`₩ ${formattedTotalAmount}`}
        icon={<ChartLineIcon />}
      />
      <SummaryCard
        title="총 거래 건수"
        value={formattedTotalCount}
        icon={<ShoppingCartIcon />}
      />
    </div>
  );
}
