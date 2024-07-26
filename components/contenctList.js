import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/api/config";

const ContentList = () => {
  const [data, setData] = useState(null);

  const GetList = () => {
    axios
      .get(`${onRun}/ContentList/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error, "ContectList");
      });
  };
  useEffect(GetList, []);


    return (
        <>
          {data
            ? data.map((item) => (
                <div key={item.id}>
                  <div className="text-center text-4xl  text-[#232563] max-w-4xl mx-auto py-5 ">
                    <div className="mx-auto w-full max-w-4xl  py-3 text-center text-4xl font-bold text-[#232563]">
                      <div className="relative flex py-5 justify-center items-center">
                        <p className="flex-shrink mx-12 text-3xl font-extrabold sm:text-4xl my-auto text-[#232563]">
                          {item.Title}
                        </p>
                      </div>
                    </div>
                    <div className="relative grid justify-items-center ">
                      <p className="max-w-4xl mx-auto mt-2 text-center font-normal text-gray-600 text-2xl">
                        {item.Description}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden bg-white py-10 sm:py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                          <div className="lg:max-w-lg h-fit">
                            <dl className="mt-10 max-w-xl space-y-10 text-base leading-7 text-gray-600 lg:max-w-none">
                              {item.children.map((child) => (
                                <div key={child.Title} className="relative ps-20">
                                  <dt className="inline font-semibold text-gray-900">
                                    <Image
                                      className="absolute start-1 top-1 h-14 w-14"
                                      src={`http://farasite.fidip.ir/${child.Icon}`}
                                      alt=""
                                      width={300}
                                      height={300}
                                    />
                                    {child.Title}
                                  </dt>{" "}
                                  <dd className="outline">{child.Description}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        </div>
                        <Image
                          src={item.Image}
                          alt="Product screenshot"
                          className="w-fit mr-40 h-fit items-center"
                          width={2432}
                          height={1442}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </>
      );
 

};
export default ContentList;
