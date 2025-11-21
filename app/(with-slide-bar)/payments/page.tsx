import { getPaymentStatus } from "@/entities/common/api/get-payment-status";
import { getPaymentType } from "@/entities/common/api/get-payment-type";
import usePaymentsData from "@/features/payments/model/use-payments-data";
import PageContentLayout from "@/widgets/layout/page-content";
import PaymentsContentWidget from "@/widgets/payments/content/ui/payments-content-widget";
import PaymentsSummaryWidget from "@/widgets/payments/summary/ui/payments-summary-widget";
import { use } from "react";

export default function PaymentsPage() {
  const { raw: paymentsData, stats: paymentsStats } = use(usePaymentsData());
  const paymentTypes = use(getPaymentType());
  const paymentStatuses = use(getPaymentStatus());

  return (
    <PageContentLayout
      title="거래 내역"
      description="가맹점의 거래 내역을 조회할 수 있는 리스트 페이지 입니다."
    >
      <PaymentsSummaryWidget paymentsStats={paymentsStats} />
      <PaymentsContentWidget
        paymentsData={paymentsData}
        paymentTypes={paymentTypes}
        paymentStatuses={paymentStatuses}
      />
    </PageContentLayout>
  );
}
