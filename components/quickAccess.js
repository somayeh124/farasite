import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/api/config";
import Link from "next/link";

const QuickAccess = () => {
  const [data, setData] = useState(null);

  const postQuickAccess = () => {
    axios
      .get(`${onRun}/quickaccess/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
          setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(postQuickAccess, []);
  return (
    <>
      {data ? (
        <div>
          <div className="mx-auto w-full max-w-4xl px-4 py-6">
            {/* title */}
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
                  دسترسی‌سریع{" "}
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
          </div>
          <div className="sm:mx-auto w-full max-w-7xl px-4 py-6 flex sm:flex-row flex-col md:flex-wrap  items-center justify-center ">
            {data.map((i) => {
              return (
                <div
                  key={Math.floor(Math.random() * 10000000)}
                  className="flex flex-col items-center sm:auto-rows-min drop-shadow-xl justify-center w-full max-w-sm mx-auto my-auto mt-5 sm:py-5"
                >
                  <div
                    className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                    style={{
                      backgroundImage: "url(" + i.Picture + ")",
                    }}
                  ></div>

                  <div className="w-56 -mt-6 overflow-hidden bg-white rounded-lg drop-shadow-sm md:w-64 ">
                    <Link
                      className="flex justify-center px-3 py-2 font-bold tracking-wide text-center uppercase text-[#232563] bg-white hover:bg-[#232563] hover:text-white"
                      href={i.Url}
                      target="_blank"
                    >
                      {/* <Link href={i.Url} className="   text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700  focus:bg-gray-700  focus:outline-none">
                   
                      </Link> */}
                      {i.Title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default QuickAccess;
