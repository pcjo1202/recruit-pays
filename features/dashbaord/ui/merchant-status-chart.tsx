"use client";

import { getMerchantStatusColors } from "@/shared/lib";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MerchantStatusChartProps {
  data: {
    labels: string[];
    data: number[];
  };
}

export default function MerchantStatusChart({
  data
}: MerchantStatusChartProps) {
  const statusColors = getMerchantStatusColors();
  const backgroundColor = Object.values(statusColors);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "가맹점 수",
        data: data.data,
        backgroundColor,
        borderWidth: 1,
        borderColor: "hsl(var(--background))"
      }
    ]
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.parsed.x}개`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
}
