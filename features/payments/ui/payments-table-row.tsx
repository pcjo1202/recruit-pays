import { PAYMENT_TYPE_CODE_DESCRIPTION } from "@/entities/common/model/payment-type";
import { PaymentStatusBadge } from "@/entities/common/ui";
import { Payments } from "@/entities/payments/model";
import { TableCell, TableRow } from "@/shared/ui/table";
import { EXCHANGE_RATE } from "../constants/exchange-rate";

export default function PaymentsTableRow({
  paymentCode,
  mchtCode,
  amount,
  payType,
  status,
  paymentAt,
  currency
}: Payments) {
  const formattedAmount = (
    Number(amount) * EXCHANGE_RATE[currency as "USD" | "KRW"]
  ).toLocaleString("ko-KR");

  const formattedPayType =
    PAYMENT_TYPE_CODE_DESCRIPTION[
      payType as keyof typeof PAYMENT_TYPE_CODE_DESCRIPTION
    ];

  const formattedPaymentAt = new Date(paymentAt).toLocaleString("ko-KR");

  return (
    <TableRow>
      <TableCell>{paymentCode}</TableCell>
      <TableCell>{mchtCode}</TableCell>
      <TableCell>{`₩ ${formattedAmount}`}</TableCell>
      <TableCell>{formattedPayType}</TableCell>
      <TableCell>
        <PaymentStatusBadge text={status} />
      </TableCell>
      <TableCell>{formattedPaymentAt}</TableCell>
    </TableRow>
  );
}
