import { http } from "@/shared/api";
import { PaymentType } from "../model/payment-type";

export const getPaymentType = async (): Promise<PaymentType[]> => {
  return http.get<PaymentType[]>("/common/paymemt-type/all");
};
