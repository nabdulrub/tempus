import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  return (
    <Bar
      data={chartData}
      options={{
        maintainAspectRatio: true,
        responsive: true,
        barThickness: 10,
        maxBarThickness: 12,
        backgroundColor: "#fff",
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
              color: "#39383D",
            },
            border: {
              dash: [7, 7],
            },
            ticks: {
              display: false,
              maxTicksLimit: 5,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
