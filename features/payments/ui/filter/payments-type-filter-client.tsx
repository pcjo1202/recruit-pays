"use client";

import { PaymentType, PaymentTypeName } from "@/entities/common/model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/shared/ui/select";

interface PaymentsTypeFilterClientProps {
  onValueChange?: (value: PaymentTypeName | "all") => void;
  paymentTypes: PaymentType[];
  defaultValue?: string;
}

export default function PaymentsTypeFilterClient({
  onValueChange,
  paymentTypes,
  defaultValue = "all"
}: PaymentsTypeFilterClientProps) {
  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder="결제 수단 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">전체</SelectItem>
        {paymentTypes.map(({ type, description }) => (
          <SelectItem key={type} value={type}>
            <span className="text-center">{description}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
