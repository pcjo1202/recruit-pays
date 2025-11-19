import { http } from "@/shared/api";
import { Merchants } from "../model";

export const getMerchantsList = async (): Promise<Merchants[] | undefined> => {
  return http.get<Merchants[]>("/merchants/list");
};
