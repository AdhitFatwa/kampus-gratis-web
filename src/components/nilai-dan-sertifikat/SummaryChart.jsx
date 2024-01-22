import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

import { nilai } from "../../data/nilai";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
);

export const SummaryChart = () => {
  const data = nilai;
  const labels = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  const dataScore = data?.semestrial_average?.semester_grades?.map((item) => item.gpa);

  const dataLine = {
    labels: labels,
    datasets: [
      {
        label: "IPK",
        data: dataScore,
        borderColor: "white",
        tension: 0.1,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "#1070a4cd");
          gradient.addColorStop(1, "#1070a423");
          return gradient;
        },
        hoverBackgroundColor: "#3b83f67e",
        hoverBorderColor: "#3b83f652",
        pointRadius: 6,
        pointHoverRadius: 20,
        pointStyle: "circle",
        pointBackgroundColor: "#737373",
        borderWidth: 2,
      },
    ],
  };

  const optionsLine = {
    scales: {
      y: {
        max: 4.5,
        min: 0,
        ticks: {
          stepSize: 1,
          max: 4,
          callback: function (value) {
            if (value === 4.5) {
              return "";
            } else {
              return value;
            }
          },
        },
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: true,
        },
        ticks: {
          display: true,
        },
        reverse: false,
      },
    },
    element: {
      line: {
        tension: 0,
        borderwidth: 2,
        borderColor: "rgba (47, 97, 68, 1) ",
        fill: "start",
        backgroundColor: "rgba (47, 97, 68, 0.3) ",
      },
      point: {
        radius: 0,
        hintRadius: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="h-[400px] -mt-4 overflow-hidden ">
      <Line data={dataLine} options={optionsLine} />
    </div>
  );
};
