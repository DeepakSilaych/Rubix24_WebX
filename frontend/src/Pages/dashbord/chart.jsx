import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import style from "./style.module.css";

const data = [
  {
    title: "Netflix",
    price: "150.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "49.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
  {
    title: "Netflix",
    price: "77.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "300.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
  {
    title: "Netflix",
    price: "250.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "460.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
  {
    title: "Netflix",
    price: "490.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "490.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
  {
    title: "Netflix",
    price: "490.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "490.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
  {
    title: "Netflix",
    price: "490.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "490.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
];

function BarChart() {
  const [selectedDuration, setSelectedDuration] = useState("totalYear");

  const getFilteredData = () => {
    // Implement logic to filter data based on selectedDuration
    // For example, filter data for the current month, previous month, or total year
    // ...

    return data; // Replace this with the filtered data
  };

  const filteredData = getFilteredData();

  const chartData = {
    labels: filteredData.map((entry) => entry.title),
    datasets: [
      {
        label: "Subscription Prices",
        data: filteredData.map((entry) => entry.price),
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
  };

  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = document.getElementById("bar-chart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          customImages: {
            images: filteredData.map((entry) => ({
              src: entry.image,
              width: 20,
              height: 20,
              x: 0, // Adjust X position as needed
              y: 0, // Adjust Y position as needed
            })),
          },
        },
      },
    });

    return () => {
      chartRef.current && chartRef.current.destroy();
    };
  }, [chartData]);

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  return (
    <div className={style.chartbox}>
      <div className={style.durationOptions}>
        <button
          onClick={() => handleDurationChange("currentMonth")}
          className={selectedDuration === "currentMonth" ? style.active : ""}
        >
          Current Month
        </button>
        <button
          onClick={() => handleDurationChange("previousMonth")}
          className={selectedDuration === "previousMonth" ? style.active : ""}
        >
          Previous Month
        </button>
        <button
          onClick={() => handleDurationChange("totalYear")}
          className={selectedDuration === "totalYear" ? style.active : ""}
        >
          Total Year
        </button>
      </div>

      <div className={style.barchart}>
        <canvas id="bar-chart" ></canvas>
      </div>
    </div>
  );
}

export default BarChart;