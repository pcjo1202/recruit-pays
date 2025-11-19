import { http } from "@/shared/api";
import { PaymentStatus } from "../model/payment-status";

export const getPaymentStatus = async (): Promise<
  PaymentStatus[] | undefined
> => {
  return http.get<PaymentStatus[]>("/common/payment-status/all");
};
