import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { onRun, domin } from "@/api/config";
import { FiPercent } from "react-icons/fi";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [""],
    datasets: [],
  });

  const [data, setData] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  let delayed;

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = (fund) => {
    setTimeout(() => {
      if (fund.length > 0) {
        const efficiencyValues = fund.map((f) => ({
          label: f.Name,
          data: [f.Efficiency],
          backgroundColor: randomColor(),
          borderRadius: 20,
          barThickness: 200 / fund.length,
        }));
        setChartData({ labels: [""], datasets: efficiencyValues });
      }
    }, 500);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
      },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  const GetData = async () => {
    try {
      const response = await axios.get(`${onRun}/barchart/?Domain=${domin}`);
      if (response.data && response.data.length > 0) {
        const fundData = response.data[0];
        setData(fundData.Fund);
        setDescription(fundData.Description);
        setTitle(fundData.Title);

        // تنظیم داده‌های پیش‌فرض برای نمودار
        if (fundData.Fund.length > 0) {
          const defaultFund = fundData.Fund[0][0];
          const defaultEfficiencyValues = defaultFund.map((f) => ({
            label: f.Name,
            data: [f.Efficiency],
            backgroundColor: randomColor(),
            borderRadius: 20,
            barThickness: 300 / defaultFund.length,
          }));
          setChartData({ labels: [""], datasets: defaultEfficiencyValues });
        }
      }
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data in barChart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-16">
      <div
        dir="rtl"
        className="flex flex-col items-center bg-white rounded-2xl md:flex-row md:max-w-6xl w-full h-auto shadow-2xl p-16"
      >
        <div className="flex-shrink-0 flex-grow w-full h-128 md:w-3/5 md:h-auto rounded-2xl bg-gray-200 shadow-2xl relative mb-8 md:mb-0 md:mr-8">
          {loading ? (
            <div className="w-full h-full bg-gray-300 animate-pulse rounded-2xl"></div>
          ) : (
            <Bar data={chartData} options={options} className="w-full h-full" />
          )}
          <div className="absolute top-4 left-4 bg-white p-4 rounded-full shadow-lg">
            <FiPercent className="text-3xl text-black" />
          </div>
        </div>
        <div className="flex flex-col justify-between leading-normal w-full md:w-2/5 mr-10">
          <h5
            className="mb-4 text-3xl font-bold tracking-tight text-gray-900"
            id={title}
          >
            {loading ? (
              <div className="h-8 bg-gray-300 animate-pulse rounded"></div>
            ) : (
              title
            )}
          </h5>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-6 font-normal text-gray-700 text-lg">
            {loading ? (
              <div>
                <div className="h-6 bg-gray-300 animate-pulse rounded mb-2"></div>
                <div className="h-6 bg-gray-300 animate-pulse rounded mb-2"></div>
                <div className="h-6 bg-gray-300 animate-pulse rounded mb-2"></div>
              </div>
            ) : (
              description
            )}
          </div>
          <div className="custom-scrollbar flex flex-col items-center space-y-4 mt-8 overflow-y-auto h-48 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {loading ? (
              <div className="w-full space-y-4">
                <div className="h-12 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-12 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-12 bg-gray-300 animate-pulse rounded"></div>
              </div>
            ) : (
              data.map((fund, index) => (
                <button
                  key={index}
                  className="bg-gray-300 z-50 w-full hover:bg-gray-200 duration-300 text-black py-4 px-6 rounded"
                  onClick={() => handleClick(fund[0])}
                >
                  {fund.Title}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
