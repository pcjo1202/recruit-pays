import { http } from "@/shared/api";
import { Payments } from "../model";

export const getPaymentsList = async (): Promise<Payments[]> => {
  return http.get<Payments[]>("/payments/list");
};
