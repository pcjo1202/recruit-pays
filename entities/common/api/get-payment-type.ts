import { http } from "@/shared/api";
import { cache } from "react";
import { PaymentType } from "../model/payment-type";

export const getPaymentType = cache(async (): Promise<PaymentType[]> => {
  return http.get<PaymentType[]>("/common/paymemt-type/all");
});
