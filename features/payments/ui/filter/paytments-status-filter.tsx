import { getPaymentStatus } from "@/entities/common/api";
import { PaymentStatusCodeType } from "@/entities/common/model";
import PaymentsStatusFilterClient from "./payments-status-filter-client";
import { use } from "react";

interface PaymentsStatusFilterProps {
  onValueChange?: (value: PaymentStatusCodeType | "all") => void;
  defaultValue?: string;
}

export default function PaymentsStatusFilter({
  onValueChange,
  defaultValue
}: PaymentsStatusFilterProps) {
  const paymentStatuses = use(getPaymentStatus());

  return (
    <PaymentsStatusFilterClient
      paymentStatuses={paymentStatuses}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
    />
  );
}
