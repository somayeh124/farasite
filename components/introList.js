/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { PiSealCheckFill } from "react-icons/pi";
import axios from "axios";
import { domin, onRun } from "@/api/config";

const IntroList = () => {
  const [data, setData] = useState([]);
  const fetchIntroList = () => {
    axios
      .get(`${onRun}/introlist/?Domain=${domin}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchIntroList();
  }, []);
  return (
    <div className="w-full h-full px-5 xl:px-0 py-20 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-center text-4xl pb-4 text-[#232563] max-w-4xl mx-auto"
        >
          <div className="mx-auto w-full max-w-4xl pb-3 text-center text-4xl font-bold text-[#232563]">
            <div className="relative flex py-5 justify-center items-center">
              <p className="flex-shrink mx-12 text-lg font-extrabold md:text-3xl my-auto text-[#232563]">
                {item.Title}
              </p>
            </div>
          </div>
          <div className="bg-white mx-auto max-w-5xl text-black rounded-3xl shadow-xl p-5">
            <div className="lg:grid-cols-3">
              <div className="flex h-full pb-3 rounded-3xl flex-col relative">
                {item.List &&
                  item.List.map((listItem, listIndex) => (
                    <div
                      key={listIndex}
                      className="mb-3 mt-5 flex items-center"
                    >
                      <PiSealCheckFill className="text-2xl text-[#5b8eec] mr-3" />
                      <h6 className="mr-2 text-lg">{listItem}</h6>
                    </div>
                  ))}
                <div className="absolute -left-36 -top-14 w-64 h-64">
                  <img
                    width="100"
                    height="100"
                    src="https://img.icons8.com/external-others-iconmarket/100/000000/external-chart-marketing-and-s-e-o-others-iconmarket-4.png"
                    alt="external-chart-marketing-and-s-e-o-others-iconmarket-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroList;
