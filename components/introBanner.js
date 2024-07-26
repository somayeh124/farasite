/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { onRun, domin } from "@/api/config";
import IntroBannerImage from "../images/introduction.svg";
import Image from "next/image";

const IntroBanner = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(`${onRun}/introbanner/?Domain=${domin}`);
      if (response.data.length > 0) {
        setData(response.data[0]);
        // console.log(response.data, "banner");
      }
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data in introBanner:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>خطای سرور</div>;
  }

  return (
    <section className="bg-white" dir="rtl">
      <div className="grid max-w-screen-xl px-8 pt-24 pb-16 mx-auto lg:gap-16 xl:gap-0 lg:py-24 lg:grid-cols-12 lg:pt-36">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl mb-8 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl xl:text-7xl text-gray-800">
            {data.Title}
          </h1>
          <p className="max-w-3xl mb-8 text-2xl leading-tight tracking-tight text-gray-500">
            {data.Discription}
          </p>
          <div className="max-w-3xl mb-8 text-2xl leading-tight tracking-tight text-gray-700">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(data.Question)
                  .start()
                  .pauseFor(2000)
                  .deleteAll();
              }}
              options={{
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:w-full lg:h-full justify-center items-center">
          <Image
            src={IntroBannerImage}
            alt="hero image"
            className="w-full h-auto"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroBanner;

