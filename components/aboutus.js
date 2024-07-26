import Image from "next/image";
import card from "../images/about.png";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { domin, onRun } from "@/api/config";

const AboutUs = () => {
  const [data, setData] = useState([]);

  const postAboutus = () => {
    axios
      .get(`${onRun}/information/?Domain=${domin}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{postAboutus(),[]});
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-6" id="about">
        {/* title */}
        <div className="mx-auto w-full max-w-4xl  py-3 text-center text-4xl font-bold text-[#232563]">
          <div className="relative flex py-5 justify-center items-center">
            <div className="hidden  sm:block flex-grow border-t-2  border-[#232563] z-10" />
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
              درباره‌ما{" "}
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
      <div className=" mg-12 lg:mx-auto bg-white overflow-hidden w-fit lg:max-w-7xl flex flex-row  mt-2.5 rounded-lg  h-fit  ">
        <div className="md:flex md:my-5">
          <div className="sm:p-8   p-2 border rounded-lg lg:border-e-0 border-gray-200  lg:rounded-r-lg">
            <div className="uppercase tracking-wide text-sm font-semibold h-20 px-4 bg-white rounded-2xl z-[100]">
              <div className="grid grid-rows-1 grid-flow-col w-fit content-center items-center ">
                <div className="row-span-2 col-span-1 ">
                  {data ? (
                    <Image
                      className="h-20 w-auto my-1 mr-1  rounded-full p-0.5"
                      src={data.Logo2}
                      width={50}
                      height={30}
                      alt="error"
                    />
                  ) : null}
                </div>
                <div className="row-span-1">
                  {" "}
                  <p className="text-xl pr-1 border-spacing-x-3.5 py-2 text-[#02205F]">
                    {/* {data.Name} */}
                  </p>
                </div>
              </div>{" "}
            </div>

            <div className="  text-lg leading-tight font-medium mt-5 text-[#232563]">
              <div className="flex flex-row  p-2 pt-1 z-40 ">
                <p className="py-1 text-xl font-bold ">شناسه ملی :</p>
                <p className="py-1 start-0 text-sm mt-1 ps-2 ">
                  {data ? data.NationalID : null}
                </p>
              </div>
            </div>
            <div className="  text-lg leading-tight font-medium mt-5 text-[#232563]">
              <div className="flex flex-row  p-2 pt-1 z-40 ">
                <p className="py-1 text-xl font-bold ">نوع شرکت :</p>
                <p className="py-1 start-0 text-sm mt-1 ps-2 ">
                  {data ? data.TypeOfCompany : null}
                </p>
              </div>
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium pt-5 text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1 text-[3232563] text-xl font-bold">
                  درباره شرکت:
                </div>
                <div className="py-1 text-[#3232563] text-sm mt-1 flex flex-row ">
                  {data ? data.AboutUs : null}
                </div>
              </div>
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium pt-5 text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1 text-[3232563] text-xl font-bold">
                  زمینه فعالیت:
                </div>
                <div className="py-1 text-[#3232563] text-sm mt-1 flex flex-row ">
                  {data ? data.FieldOfActivity : null}
                </div>
              </div>
            </div>
            {data ? (
              data.CodalLink ? (
                <div className="  text-lg leading-tight font-medium mt-5 text-[#232563]">
                  <div className="flex flex-row  p-2 pt-1 z-40 ">
                    <Link
                      target="_blank"
                      href={data.CodalLink}
                      className=" flex items-center mt-2"
                    >
                      <p className="py-1 mr-1 text-base font-bold">
                        ورود به کُدال
                      </p>
                    </Link>
                  </div>
                </div>
              ) : null
            ) : null}
          </div>
          <div className="md:shrink-0">
            <Image
              className="hidden h-full w-[660px] object-cover lg:block"
              src={card}
              alt="Modern building architecture"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
