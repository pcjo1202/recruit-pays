"use client";

import { PaymentStatus, PaymentStatusCodeType } from "@/entities/common/model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/shared/ui/select";

interface PaymentsStatusFilterClientProps {
  onValueChange?: (value: PaymentStatusCodeType | "all") => void;
  paymentStatuses: PaymentStatus[];
  defaultValue?: string;
}

export default function PaymentsStatusFilterClient({
  onValueChange,
  paymentStatuses,
  defaultValue = "all"
}: PaymentsStatusFilterClientProps) {
  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder="결제 상태 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">전체</SelectItem>
        {paymentStatuses.map(({ code, description }) => (
          <SelectItem key={code} value={code}>
            {description}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
