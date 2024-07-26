import React, { useEffect, useState } from "react";
import { PiSealQuestionFill } from "react-icons/pi";
import axios from "axios";
import { onRun, domin } from "@/api/config";
import Investment from "../images/investment.svg";
import Image from "next/image";
 import Slider from "react-slick";


const IntroCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(`${onRun}/introcard/?Domain=${domin}`);
      if (response.data.length > 0) {
        setData(response.data);
      }
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="inline-flex flex-col border border-gray-300 rounded-lg p-2 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r mb-10 text-center text-lg text-indigo-900">
              <div className="w-full h-10 bg-gray-300 animate-pulse rounded mb-4 md:mb-0 md:w-auto md:mr-4"></div>
              
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="w-full h-32 bg-gray-300 animate-pulse border border-gray-200 rounded-lg flex items-center justify-center"
                ></div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 lg:flex-row lg:space-x-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4"
            >
              <div className="inline-flex flex-col border border-gray-300 rounded-lg shadow-lg p-8 bg-white">
                <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r mb-10 text-center text-lg text-indigo-900">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-0 md:mr-4">
                    {item.Title}
                  </h1>
                  
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {item.Card.map((cardItem, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-40 h-32 sm:h-40 bg-white border border-gray-200 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl flex items-center justify-center shadow-md shadow-indigo-200"
                    >
                      <p className="font-medium text-gray-900 text-center">
                        {cardItem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="hidden lg:flex lg:w-1/3 justify-center items-center p-4">
            <Image
              src={Investment}
              alt="Investment illustration"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default IntroCards;

