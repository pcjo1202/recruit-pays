import { http } from "@/shared/api";
import { MerchantsDetails } from "../model";

export const getMerchantsDetails = async (): Promise<
  MerchantsDetails[] | undefined
> => {
  return http.get<MerchantsDetails[]>("/merchants/details");
};
