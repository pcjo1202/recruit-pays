"use client";

import { Payments } from "@/entities/payments/model";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/shared/ui/table";
import PaymentsTableRow from "./payments-table-row";

interface PaymentsListProps {
  paymentsData: Payments[];
}

const TABLE_HEAD = [
  { label: "거래번호", key: "paymentCode" },
  { label: "가맹점코드", key: "mchtCode" },
  { label: "거래금액", key: "amount" },
  { label: "결제수단", key: "payType" },
  { label: "결제상태", key: "status" },
  { label: "결제일시", key: "paymentAt" }
];

export default function PaymentsList({ paymentsData }: PaymentsListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {TABLE_HEAD.map(({ label, key }) => {
            return <TableHead key={key}>{label}</TableHead>;
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {paymentsData.map((payment) => {
          return <PaymentsTableRow key={payment.paymentCode} {...payment} />;
        })}
      </TableBody>
    </Table>
  );
}
