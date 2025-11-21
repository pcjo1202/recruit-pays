import { getMerchantsList } from "@/entities/merchants/api";
import { calculateMerchantsStats } from "@/features/dashbaord/lib/calculate-merchant-stats";

export default async function useMerchantsData() {
  const merchantsData = await getMerchantsList();

  const merchantsStats = calculateMerchantsStats(merchantsData);

  return {
    raw: merchantsData,
    stats: merchantsStats
  };
}
