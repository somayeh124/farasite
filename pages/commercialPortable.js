import { useEffect, useState } from "react";
import imagee from "../images/login.jpg";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { domin, onRun } from "@/api/config";

import HeaderMenu from "@/components/HeaderMenu";
const CommercialPortable = () => {
  const [data, setData] = useState();
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
    <div className="w-full  h-screen bg-gray-200">

      <HeaderMenu />

      <div className="py-16 ">
        <div className="flex bg-white mt-16 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover">
            <Image
              src={imagee}
              alt="Commercial Portable"
              width={500}
              height={500}
              className="size-full"
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold p-5 text-[#232563] text-center">
              صنایع مفتول ایساتیس پویا
            </h2>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <Link
                href="/"
                className="text-xs text-center text-indigo-500 uppercase"
              >
                پورتال تجاری
              </Link>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-indigo-700 text-sm font-bold mb-2">
                شماره موبایل
              </label>
              <input
                className="bg-gray-200 text-indigo-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="tel"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-indigo-700 text-sm font-bold mb-2">
                  رمز
                </label>
                <Link href="/" className="text-xs text-indigo-500">
                  فراموشی رمز{" "}
                </Link>
              </div>
              <input
                className="bg-gray-200 text-indigo-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button className="bg-[#232563] text-white font-bold py-2 px-4 w-full rounded hover:bg-indigo-800">
                ورود
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CommercialPortable;
