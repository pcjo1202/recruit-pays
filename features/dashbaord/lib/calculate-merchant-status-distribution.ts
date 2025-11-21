import type {
  MchtStatus,
  MchtStatusCodeType
} from "@/entities/common/model/mcht-status";
import type { Merchants } from "@/entities/merchants/model";

/**
 * 가맹점 상태별 수 분포 계산
 */
export const calculateMerchantStatusDistribution = (
  merchants: Merchants[],
  mchtStatuses: MchtStatus[]
) => {
  // 상태 코드별 매핑 생성
  const statusMap = new Map(
    mchtStatuses.map((status) => [status.code, status.description])
  );

  const statusCounts: Record<MchtStatusCodeType, number> = {
    READY: 0,
    ACTIVE: 0,
    INACTIVE: 0,
    CLOSED: 0
  };

  // 가맹점 상태별 수 계산
  merchants.forEach(({ status }) => {
    if (status in statusCounts) {
      statusCounts[status as MchtStatusCodeType]++;
    }
  });

  // 라벨과 데이터 배열로 변환
  const labels = Object.keys(statusCounts).map(
    (key) => statusMap.get(key as MchtStatusCodeType) || key
  );
  const data = Object.values(statusCounts);

  return { labels, data };
};
