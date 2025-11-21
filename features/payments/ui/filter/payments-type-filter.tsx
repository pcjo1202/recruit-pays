import { getPaymentType } from "@/entities/common/api";
import { PaymentTypeName } from "@/entities/common/model";
import { use } from "react";
import PaymentsTypeFilterClient from "./payments-type-filter-client";

interface PaymentsTypeFilterProps {
  onValueChange?: (value: PaymentTypeName | "all") => void;
  defaultValue?: string;
}

export default function PaymentsTypeFilter({
  onValueChange,
  defaultValue
}: PaymentsTypeFilterProps) {
  const paymentTypes = use(getPaymentType());

  return (
    <PaymentsTypeFilterClient
      paymentTypes={paymentTypes}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
    />
  );
}
