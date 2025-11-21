"use client";

import { getChartColors } from "@/shared/lib";
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

interface PaymentTypeChartProps {
  data: {
    labels: string[];
    counts: number[];
    amounts: number[];
  };
}

export default function PaymentTypeChart({ data }: PaymentTypeChartProps) {
  const colors = getChartColors();

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "거래 건수",
        data: data.counts,
        backgroundColor: colors[1],
        borderColor: colors[1],
        borderWidth: 1,
        yAxisID: "y"
      },
      {
        label: "거래액 (만원)",
        data: data.amounts.map((amount) => Math.round(amount / 10000)),
        backgroundColor: colors[0],
        borderColor: colors[0],
        borderWidth: 1,
        yAxisID: "y1"
      }
    ]
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false
    },
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
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            if (label.includes("거래액")) {
              return `${label}: ${value?.toLocaleString()}만원`;
            }
            return `${label}: ${value?.toLocaleString()}건`;
          }
        }
      }
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        title: {
          display: true,
          text: "거래 건수"
        }
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        title: {
          display: true,
          text: "거래액 (만원)"
        },
        grid: {
          drawOnChartArea: false
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
}
