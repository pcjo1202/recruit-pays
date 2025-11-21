"use client";

import {
  PaymentStatus,
  PaymentStatusCodeType,
  PaymentType,
  PaymentTypeName
} from "@/entities/common/model";
import PaymentsDateFilter from "./payments-date-fliter";
import PaymentsStatusFilterClient from "./payments-status-filter-client";
import PaymentsTypeFilterClient from "./payments-type-filter-client";

interface PaymentsFilterContainerClientProps {
  paymentTypes: PaymentType[];
  paymentStatuses: PaymentStatus[];
  onDateChange?: (value: string) => void;
  onTypeChange?: (value: PaymentTypeName | "all") => void;
  onStatusChange?: (value: PaymentStatusCodeType | "all") => void;
}

export default function PaymentsFilterContainerClient({
  paymentTypes,
  paymentStatuses,
  onDateChange,
  onTypeChange,
  onStatusChange
}: PaymentsFilterContainerClientProps) {
  return (
    <div className="flex items-center gap-2">
      <PaymentsDateFilter onValueChange={onDateChange} />
      <PaymentsStatusFilterClient
        paymentStatuses={paymentStatuses}
        onValueChange={onStatusChange}
      />
      <PaymentsTypeFilterClient
        paymentTypes={paymentTypes}
        onValueChange={onTypeChange}
      />
    </div>
  );
}
