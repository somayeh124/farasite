import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { domin, onRun } from "@/api/config";

export default function Blog() {
  const [data, setData] = useState([]);


  const postBloges = async() => {
    try {
      const response = await axios.get(`${onRun}/news/?Domain=${domin}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postBloges();
  }, []);

  return (
    <section className="bg-white">
      {data ? (
        <div className="container px-  py-10 mx-auto">
          <div className="mx-auto w-full max-w-4xl  py-3 text-center text-4xl font-bold text-[#232563]">
            <div className="relative flex py-5 justify-center items-center">
              <div className="hidden sm:block flex-grow border-t-2  border-[#232563] z-10" />
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1em"
                width="1em"
                className="pl-5 hidden sm:block"
              >
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <p className="flex-shrink mx-12 text-3xl font-extrabold sm:text-4xl my-auto text-[#232563]">
                آخرین‌مقالات{" "}
              </p>
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1em"
                width="1em"
                className="pr-5  hidden sm:block"
              >
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <div className="hidden sm:block flex-grow border-t-2 border-gray-900"></div>
            </div>
          </div>

          {data.length !== 0 ? (
            <div className="relative grid justify-items-end w-full max-w-4xl mb-3  ">
              <Link
                href={"/blog"}
                target="_blank"
                className="flex flex-row lg:ml-[48rem]  md:ml-[38rem] sm:ml-[30rem] ml-96 transition-all duration-300 hover:scale-110 hover:font-bold"
              >
                <span className="text-base text-[#232563]  ">
                  {" "}
                  مشاهده بیشتر
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1rem"
                  width="1rem"
                  className="my-1 mr-1 text-[#232563]"
                >
                  <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                </svg>
                {/* <p className="text-xl text-[#232563]">سوالات متداول</p> */}
              </Link>
            </div>
          ) : null}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
            <>
              {data.slice(-3).map((i) => {
                return (
                  <div
                    key={Math.floor(Math.random() * 10000)}
                    className="shadow-lg rounded-xl  -mx-4 py-4 border"
                  >
                    <Link href={"/blog/" + i.route} target="_blank">
                      {i.Picture ? (
                        <Image
                          width={1000}
                          height={1000}
                          className="object-cover object-center w-full h-64 rounded-lg hover:opacity-80 lg:h-80"
                          src={i.Picture}
                          alt={i.Title}
                        />
                      ) : 
                      (
                        <Image
                          width={1000}
                          height={1000}
                          className="object-cover object-center w-full h-64 rounded-lg hover:opacity-80 lg:h-80"
                          alt={i.Title}
                        />
                      )}
                    </Link>
                    <div className="my-auto pt-2 mx-4 ">
                      <span className="text-indigo-600  uppercase">
                        {i.TypeOfContent}
                      </span>

                      <h1 className="mt-4 text-xl font-semibold text-gray-800">
                        {i.Title}
                      </h1>

                      <p className="mt-2 text-gray-500 ">
                        {i.ShortDescription}
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-row">
                          <p className="text-gray-600">#</p>
                          <Link
                            href={"/grouping/" + i.id}
                            className="text-sm font-mono text-gray-500 hover:underline hover:text-gray-500"
                          >
                            {i.Grouping_Title}
                          </Link>

                          <p className="text-sm text-gray-500 px-2">
                            {new Date(String(i.CreateAt)).toLocaleDateString()}
                          </p>
                        </div>

                        <Link
                          href={"/blog/" + i.route}
                          target="_blank"
                          className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#232563] rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        >
                          مطالعه
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      ) : null}
    </section>
  );
}
