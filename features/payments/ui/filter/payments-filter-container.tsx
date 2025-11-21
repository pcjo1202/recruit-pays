import {
  PaymentStatusCodeType,
  PaymentTypeName
} from "@/entities/common/model";
import PaymentsDateFilter from "./payments-date-fliter";
import PaymentsTypeFilter from "./payments-type-filter";
import PaymentsStatusFilter from "./paytments-status-filter";

interface PaymentsFilterContainerProps {
  onDateChange?: (value: string) => void;
  onTypeChange?: (value: PaymentTypeName | "all") => void;
  onStatusChange?: (value: PaymentStatusCodeType | "all") => void;
}

export default async function PaymentsFilterContainer({
  onDateChange,
  onTypeChange,
  onStatusChange
}: PaymentsFilterContainerProps) {
  return (
    <div className="flex items-center gap-2">
      <PaymentsDateFilter onValueChange={onDateChange} />
      <PaymentsStatusFilter onValueChange={onStatusChange} />
      <PaymentsTypeFilter onValueChange={onTypeChange} />
    </div>
  );
}
