export const getChartColors = (): string[] => {
  if (typeof window === "undefined") {
    return [
      "hsl(var(--chart-1))",
      "hsl(var(--chart-2))",
      "hsl(var(--chart-3))",
      "hsl(var(--chart-4))",
      "hsl(var(--chart-5))"
    ];
  }

  const style = getComputedStyle(document.documentElement);
  return [
    style.getPropertyValue("--chart-1").trim(),
    style.getPropertyValue("--chart-2").trim(),
    style.getPropertyValue("--chart-3").trim(),
    style.getPropertyValue("--chart-4").trim(),
    style.getPropertyValue("--chart-5").trim()
  ];
};

/**
 * 결제 상태별 색상 매핑
 */
export const getPaymentStatusColors = (): Record<string, string> => {
  const colors = getChartColors();
  return {
    PENDING: colors[3], // chart-4: 보라색
    SUCCESS: colors[0], // chart-1: 초록색
    FAILED: colors[2], // chart-3: 노란색
    CANCELLED: colors[4] // chart-5: 회색
  };
};

/**
 * 가맹점 상태별 색상 매핑
 */
export const getMerchantStatusColors = (): Record<string, string> => {
  const colors = getChartColors();
  return {
    READY: colors[3], // chart-4: 보라색
    ACTIVE: colors[0], // chart-1: 초록색
    INACTIVE: colors[2], // chart-3: 노란색
    CLOSED: colors[4] // chart-5: 회색
  };
};

/**
 * 결제 수단별 색상 매핑
 */
export const getPaymentTypeColors = (): string[] => {
  const colors = getChartColors();
  return [colors[0], colors[1], colors[2], colors[3], colors[4]];
};
