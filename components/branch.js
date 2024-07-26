import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { domin, onRun } from "@/api/config";

export default function Branches() {
  const [data, setData] = useState([]);


  const postData = async() => {
    try {
      const response = await axios.get(`${onRun}/branch/?Domain=${domin}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postData();
  }, []);
  
  return (
    <>
      <div className="w-full h-full bg-white">
        <div>
          <div className=" relative md:overflow-auto  sm:rounded-lg">


            <div className="mx-auto w-full max-w-4xl py-3 text-center text-4xl font-bold text-[#232563]">
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
                  آدرس‌ها{" "}
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
            {/* web */}
            <div className="hidden lg:flex sm:p-4 p-2 rounded-lg max-w-7xl mx-auto border-2 border-gray-100  w-full overflow-x-scroll sm:overflow-x-hidden">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                <thead className="text-xs text-gray-700  rounded-lg  uppercase bg-[#F5F5F5] mb-6">
                  <tr className="rounded-full py-8">
                    <th scope="col" className="px-6 py-3">
                      استان
                    </th>
                    <th scope="col" className="px-6 py-3">
                      شهر
                    </th>
                    <th scope="col" className="px-6 py-3">
                      نوع
                    </th>
                    <th scope="col" className="px-6 py-3">
                      تلفن
                    </th>
                    <th scope="col" className="px-6 py-3">
                      آدرس
                    </th>
                    <th scope="col" className="px-6 py-3">
                      نقشه
                    </th>
                  </tr>
                </thead>
                <tbody className="rounded-ful">
                  {data?(data.map((item) => {
                    return (
                      <tr
                        className="bg-[#FBFBFB] border-b border-white rounded-full border-8 mt-3 py-5  "
                        key={Math.floor(Math.random() * 10000)}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <p>{item.Province}</p>
                        </th>
                        <td className="px-6 py-4">{item.City} </td>
                        <td className="px-6 py-4">{item.Types}</td>

                        <td className="px-6 py-4 text-right">
                          <Link href={`tel:${item.Telephone}`}>
                            {item.Telephone}
                          </Link>
                        </td>
                        <td className="px-6 py-4">{item.Address}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-row ">
                            <Link
                              href={`${item.MapLink}`}
                              // href={`https://www.google.com/maps/search/?api=1&query=${index.Address}`}
                              target="_blank"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="2em"
                                width="2em"
                                className="text-gray-600"
                              >
                                <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
                                <path d="M11.42 21.814a.998.998 0 001.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" />
                              </svg>
                            </Link>

                          </div>
                        </td>
                      </tr>
                    );
                  })
                  ) : ''}
                 
                </tbody>
              </table>
            </div>
            {/* mobile */}
            <div className="lg:hidden">
              {data.map((itemes) => (
                <div
                  key={itemes.Telephone}
                  className="w-full bg-gray-100 py-3 px-5 my-3 rounded-xl"
                >
                  <div className="flex items-center mt-4 ">
                    <div className=" flex items-center text-black justify-center h-14 w-16 bg-white rounded-lg p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-black w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                    </div>
                    <div className="ms-3 w-full">
                      <p className="text-sm text-opacity-70 font-bold text-black pb-1 ">
                        {itemes.Province}، {itemes.City}{" "}
                      </p>
                      <p className="text-sm text-black font-bold me-1">
                        {itemes.Types}
                      </p>
                    </div>
                  </div>
                  <div className="font-bold text-sm py-3 ps-2">
                    <p>
                      <Link
                        href={itemes.MapLink}
                        className="flex flex-row text-black items-center font-semibold text-sm px-4 py-2 rounded-3xl "
                      >
                        <span className="me-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                             strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                          </svg>
                        </span>
                        {itemes.Address}
                      </Link>
                    </p>
                    <Link
                      href={`tel:${itemes.Telephone}`}
                      className="flex flex-row text-black items-center font-semibold text-base px-4 py-3 rounded-3xl "
                    >
                      <span className="me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                      </span>
                      {itemes.Telephone}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
