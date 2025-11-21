import { cn } from "@/shared/lib";
import { Badge } from "@/shared/ui";
import { PAYMENT_STATUS_CODE_DESCRIPTION } from "../model/payment-status";

export default function PaymentStatusBadge({ text }: { text: string }) {
  const statusColor = {
    PENDING: "bg-yellow-500/20 text-yellow-500 border-yellow-500",
    SUCCESS: "bg-green-500/20 text-green-500 border-green-500",
    FAILED: "bg-red-500/20 text-red-500 border-red-500",
    CANCELLED: "bg-gray-500/20 text-gray-500 border-gray-500"
  } as const;

  const color = statusColor[text as keyof typeof statusColor];

  const status =
    PAYMENT_STATUS_CODE_DESCRIPTION[
      text as keyof typeof PAYMENT_STATUS_CODE_DESCRIPTION
    ];

  return (
    <Badge variant="outline" className={cn("text-xs", color)}>
      {status}
    </Badge>
  );
}
