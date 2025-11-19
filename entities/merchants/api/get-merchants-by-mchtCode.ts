import { http } from "@/shared/api";
import { MerchantsDetails } from "../model";

export const getMerchantsByMchtCode = async (
  mchtCode: string
): Promise<MerchantsDetails | undefined> => {
  return http.get<MerchantsDetails>(`/merchants/details/${mchtCode}`);
};
