import { Merchants } from "@/entities/merchants/model";

// 가맹점 데이터 통계 계산 (전체 가맹점 수, 활성 가맹점 수)
export const calculateMerchantsStats = (merchants: Merchants[]) => {
  // 전체 가맹점 수
  const totalCount = merchants.length;

  // 활성 가맹점 수
  const activeCount = merchants.filter(
    ({ status }) => status === "ACTIVE"
  ).length;

  return { totalCount, activeCount };
};
