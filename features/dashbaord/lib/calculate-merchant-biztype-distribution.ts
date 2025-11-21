import type { Merchants } from "@/entities/merchants/model";

// 업종 코드 한글 매핑
const BIZTYPE_KOREAN_MAP: Record<string, string> = {
  RETAIL: "소매",
  FOOD: "음식점",
  SHOPPING: "쇼핑몰",
  TRAVEL: "여행",
  EDUCATION: "교육",
  ENTERTAINMENT: "엔터테인먼트",
  SERVICE: "서비스",
  FINANCE: "금융",
  HEALTHCARE: "의료",
  BEAUTY: "미용",
  SPORTS: "스포츠",
  CULTURE: "문화",
  DELIVERY: "배달",
  ACCOMMODATION: "숙박",
  TRANSPORTATION: "교통",
  ETC: "기타"
};

/**
 * 업종 코드를 한글로 변환
 */
const getBizTypeLabel = (bizType: string): string => {
  return BIZTYPE_KOREAN_MAP[bizType] || bizType;
};

/**
 * 업종별 가맹점 수 분포 계산
 */
export const calculateMerchantBiztypeDistribution = (
  merchants: Merchants[]
) => {
  const biztypeCounts: Record<string, number> = {};

  // 업종별 가맹점 수 계산
  merchants.forEach(({ bizType }) => {
    if (bizType) {
      biztypeCounts[bizType] = (biztypeCounts[bizType] || 0) + 1;
    }
  });

  // 라벨과 데이터 배열로 변환 (한글로 변환)
  const labels = Object.keys(biztypeCounts).map((key) => getBizTypeLabel(key));
  const data = Object.values(biztypeCounts);

  return { labels, data };
};
