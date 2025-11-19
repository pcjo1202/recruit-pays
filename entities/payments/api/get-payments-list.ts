import { http } from "@/shared/api";
import { Payments } from "../model";

export const getPaymentsList = async (): Promise<Payments[] | undefined> => {
  return http.get<Payments[]>("/payments/list");
};
