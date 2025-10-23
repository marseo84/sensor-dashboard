import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SensorChartProps {
  label: string;
  dataPoints: number[];
  timestamps: string[];
  color: string;
}

export default function SensorChart({
  label,
  dataPoints,
  timestamps,
  color,
}: SensorChartProps) {
  const data = {
    labels: timestamps,
    datasets: [
      {
        label: label,
        data: dataPoints,
        borderColor: color,
        backgroundColor: color,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: label,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: label,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
