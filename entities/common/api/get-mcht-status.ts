import { http } from "@/shared/api";
import { MchtStatus } from "../model/mcht-status";

export const getMchtStatus = async (): Promise<MchtStatus[] | undefined> => {
  return http.get<MchtStatus[]>("/common/mcht-status/all");
};
