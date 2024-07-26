import Image from "next/image";
import img from "../images/aa.png";
import img1 from "../images/bb.png";
import React, { useEffect } from "react";
import { domin, onRun } from "@/api/config";
import axios from "axios";

const compony = [
  {
    name: "نام شرکت:",
    role: "گروه مالی و سرمایه گذاری",
  },
  {
    name: "سال تاسیس:",
    role: "1384",
  },
  {
    name: "زمینه فعالیت:",
    role: "مالی و سرمایه گذاری",
  },

  {
    name: "مدیر عامل:",
    role: " سید علی حمد خبیری ",
  },
  {
    name: " سایت:",
    role: "مالی و سرمایه گذاری",
  },
  {
    name: " آدرس:",
    role: "یزد،بلوار جمهوری،ساختمان بورس",
  },
];

const IntroductionCom = () => {
  const [data, setData] = React.useState({
    Address: String,
    AboutUs: String,
    Admin: String,
    Cataloge: String,
    Description: null,
    Domain: String,
    Keywords: null,
    Date: "",
    Logo1: "",
    Logo2: "",
    Name: "",
    NationalID: Number,
    Socialmedia: [{ instagram: "", twitter: "" }],
    Telephone: Number,
    Theme: Number,
    auto_id_0: Number,
    FieldOfActivity: String,
  });
  const postData = () => {
    axios
      .get(`${onRun}/information/?Domain=${domin}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(postData, []);

  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-6">
        {/* title */}
        <div className="py-3 text-center text-4xl font-bold text-[#232563]">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t-2 border-[#232563]" />{" "}
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
              className="pl-5"
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <p className="flex-shrink mx-12 text-4xl text-[#232563]">
              معرفی شرکت{" "}
            </p>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
              className="pr-5"
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <div className="flex-grow border-t-2 border-gray-900" />
          </div>
          <p className="text-xl text-[#232563]">{data.Name} </p>
        </div>
        <div className="py-3 mt-2.5 flex w-full p-4 rounded-lg  h-fit shadow-md border border-gray-200 ">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm font-semibold h-20 pr-1.5  bg-[#9C209E] rounded-l-3xl shadow-md rounded-r-2xl z-[100]">
                  <div className="uppercase tracking-wide text-sm font-semibold h-20 px-4  bg-[#02205F] rounded-2xl z-[100]">
                    <div className="grid grid-rows-1 grid-flow-col gap-4">
                      <div className="row-span-2 col-span-1">
                        <Image
                          width={1000}
                          height={1000}
                          className="h-16 w-auto my-2 mr-1"
                          src={data.Logo2}
                          alt="logo"
                        />
                      </div>
                      <div className="row-span-1 w-32">
                        {" "}
                        <p className="text-xl pr-1 pt-3 border-spacing-x-3.5 text-white">
                          {" "}
                          {data.Name}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
                <ul role="list" className="divide-y divide-gray-100 pt-2">
                  <li className="flex justify-between gap-x-6 py-4 bg-gray-50 my-1 rounded-lg px-3">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          نام شرکت:{" "}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {data.Name}
                      </p>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-4 bg-white my-1 rounded-lg px-3">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          سال تاسیس:{" "}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {data.Date}
                      </p>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-4 bg-gray-50 my-1 rounded-lg px-3">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          زمینه فعالیت:{" "}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {data.FieldOfActivity}
                      </p>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-4 bg-white my-1 rounded-lg px-3">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          مدیرعامل:{" "}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {data.Admin}
                      </p>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-4 bg-gray-50 my-1 rounded-lg px-3">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          سایت :{" "}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {data.Domain}
                      </p>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-4 bg-white my-1 rounded-lg px-3">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          آدرس:{" "}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {data.Address}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-2 pt-4">
              <div className="flex flex-row">
                <div className="grid gap-4">
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-xl"
                      src={img}
                      alt="error"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-4 pt-3">
                    {Array.from({ length: 4 }).map((i) => (
                      <div key={Math.floor(Math.random()*10000000000000)}>
                        <Image
                          className="h-auto max-w-full rounded-xl"
                          src={img1}
                          alt="error"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionCom;
