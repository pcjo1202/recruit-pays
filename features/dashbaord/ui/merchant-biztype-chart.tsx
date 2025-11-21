"use client";

import { getChartColors } from "@/shared/lib";
import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface MerchantBiztypeChartProps {
  data: {
    labels: string[];
    data: number[];
  };
}

export default function MerchantBiztypeChart({
  data
}: MerchantBiztypeChartProps) {
  const colors = getChartColors();

  // 업종 수에 맞게 색상 반복
  const backgroundColor = data.labels.map(
    (_, index) => colors[index % colors.length]
  );

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.data,
        backgroundColor,
        borderWidth: 1,
        borderColor: "hsl(var(--background))"
      }
    ]
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 12,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed;
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value}개 (${percentage}%)`;
          }
        }
      }
    }
  };

  return <Pie data={chartData} options={options} />;
}
