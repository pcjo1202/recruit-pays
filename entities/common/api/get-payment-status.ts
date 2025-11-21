import { http } from "@/shared/api";
import { cache } from "react";
import { PaymentStatus } from "../model/payment-status";

export const getPaymentStatus = cache(async (): Promise<PaymentStatus[]> => {
  return http.get<PaymentStatus[]>("/common/payment-status/all");
});
