import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ rainData }) => {
  const [rainInfo, setRainInfo] = useState({
    labels: ["1h", "2h", "3h", "4h"], // Changed to an array
    datasets: [
      {
        label: "Rain Chance",
        data: rainData.map((data) => data),
        borderRadius: Number.MAX_VALUE,
        borderWidth: 1,
        borderSkipped: false,
        maintainAspectRatio: false,
      },
    ],
  });

  useEffect(() => {
    // Update rainInfo when rainArray changes
    setRainInfo({
      labels: ["1h", "2h", "3h", "4h"],
      datasets: [
        {
          label: "Rain Chance",
          data: rainData.map((data) => data),
        },
      ],
    });
  }, [rainData]);

  return (
    <Bar
      data={rainInfo} // Changed to rainInfo
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
