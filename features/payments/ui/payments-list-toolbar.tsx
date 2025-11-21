import {
  PaymentStatus,
  PaymentStatusCodeType,
  PaymentType,
  PaymentTypeName
} from "@/entities/common/model";
import PaymentsFilterContainerClient from "./filter/payments-filter-container-client";
import PaymentsSearchInput from "./payments-search-input";

interface PaymentsListToolbarProps {
  paymentTypes: PaymentType[];
  paymentStatuses: PaymentStatus[];
  onSearch: (value: string) => void;
  onDateChange: (value: string) => void;
  onTypeChange: (value: PaymentTypeName | "all") => void;
  onStatusChange: (value: PaymentStatusCodeType | "all") => void;
}

export default function PaymentsListToolbar({
  paymentTypes,
  paymentStatuses,
  onSearch,
  onDateChange,
  onTypeChange,
  onStatusChange
}: PaymentsListToolbarProps) {
  return (
    <div className="flex items-center justify-between">
      <PaymentsSearchInput onSearch={onSearch} />
      <PaymentsFilterContainerClient
        paymentTypes={paymentTypes}
        paymentStatuses={paymentStatuses}
        onDateChange={onDateChange}
        onTypeChange={onTypeChange}
        onStatusChange={onStatusChange}
      />
    </div>
  );
}
