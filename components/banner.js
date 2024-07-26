/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { domin, onRun } from "@/api/config";
import { useRouter } from "next/router";
import { LuArrowLeftSquare } from "react-icons/lu";
import axios from "axios";
import TabsComponent from "@/components/cards";
import Image from "next/image";

const Banner = () => {
  const [data, setData] = useState(null);
  const [hash, setHash] = useState('')
  const router = useRouter();

  const getData = async () => {
    try {
      const response = await axios.get(`${onRun}/superproduct/?Domain=${domin}`);
      if (response.data && typeof response.data === "object") {
        setData(response.data);


      } else {
        console.error("Response data is not an object", response.data);
        setData(null);
      }
    } catch (error) {
      console.error(error, "superProduct");
      setData(null);
    }
  };

  const handleButtonClick = () => {
    router.push("/superproduct");
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      {data ? (
        <section className="bg-white mt-10" dir="rtl">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-gray-800">
                {data.Title}
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {data.Description}
              </p>
              {/* <div className="flex space-x-4">
                <button
                  onClick={handleButtonClick}
                  className="inline-flex h-12 animate-shimmer truncate items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#ffffff,45%,#4b0082,55%,#ffffff)] bg-[length:200%_100%] px-6 font-medium text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span>شروع کنیم</span>
                  <LuArrowLeftSquare className="text-2xl ml-2" />
                </button>
              </div> */}
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image" />
            </div>
          </div>
          <div className="mt-8">
            {data.Super_Product && Array.isArray(data.Super_Product) ? (
              data.Super_Product.map((product) => (
                <TabsComponent key={product.id} product={product} />
              ))
            ) : (
              <p></p>
            )}
          </div>
        </section>
      ) : (
        <p className="bg-white"></p>
      )}
    </>
  );
};

export default Banner;

