"use client";

import { getPaymentStatusColors } from "@/shared/lib";
import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PaymentStatusChartProps {
  data: {
    labels: string[];
    data: number[];
  };
}

export default function PaymentStatusChart({ data }: PaymentStatusChartProps) {
  const statusColors = getPaymentStatusColors();
  const backgroundColor = Object.values(statusColors);

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

  const options: ChartOptions<"doughnut"> = {
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
            return `${label}: ${value}건 (${percentage}%)`;
          }
        }
      }
    }
  };

  return <Doughnut data={chartData} options={options} />;
}
