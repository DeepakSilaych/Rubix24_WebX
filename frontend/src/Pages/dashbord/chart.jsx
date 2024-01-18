import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

function BarChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Your Subscriptions",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = document.getElementById("bar-chart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: userData,
      options: {
        scales: {
          x: {
            type: "category",
          },
        },
      },
    });

    return () => {
      // Cleanup: destroy the chart when the component unmounts
      chartRef.current && chartRef.current.destroy();
    };
  }, [userData]);

  return (
    <div style={{ width: 700 }}>
      <canvas id="bar-chart"></canvas>
    </div>
  );
}

export default BarChart;
