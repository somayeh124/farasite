import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Footer from "@/components/footer";
import { domin, onRun } from "@/api/config";
// import Header from "../components/header";
import HeaderMenu from "@/components/HeaderMenu";
import ScrollToTopButton from "@/components/topButton";


const HistoryTimeLine = () => {
  const [data, setData] = useState([
    {
      Date: "",
      Domain: domin,
      Paragraph: "" || null,
      Picture: "" || null,
      Status: Boolean,
      Title: "",
      Video: "" || null,
      Icon: "" || null,
    },
  ]);
  const getHistory = () => {
    axios
      .get(`${onRun}/historyofcompanies/?Domain=${domin}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getHistory, []);
  return (
    <>
      <div>

        <HeaderMenu />

        <div className=" bg-white py-8">
          <div className="container bg-gray-200 mx-auto w-full h-fit py-8 rounded-lg  ">
            <div className="relative wrap  p-10 h-fit overflow-y-visible">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full -my-5 border left-1/2"></div>
              {data.map((item, index) => (
                <div key={Math.floor(Math.random() * 10000000)}>
                  {/* <!-- right and left timeline --> */}
                  <div
                    className={`mb-8 flex ${index % 2 === 0
                        ? "flex-row timeline-start "
                        : "flex-row-reverse  timeline-end "
                      } order-1  justify-between items-center w-full `}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-[#232563] shadow-xl w-12 h-12 rounded-full mx-2">
                      <h1 className="mx-auto  pt-1.5 font-semibold text-lg text-white">
                        {item.Date}
                      </h1>
                    </div>
                    <div className="order-1  bg-[#232563] rounded-lg shadow-xl w-5/12 lg:px-6 lg:py-4 px-2 py-3 text-center">
                      <div className="flex flex-row w-full">
                        {!item.Icon === null ? (
                          <Image
                            alt="error"
                            className="text-sm left-0 ml-2 font-medium leading-snug tracking-wide bg-white rounded-full my-auto  text-white text-opacity-100"
                            src={item.Icon}
                            width={50}
                            height={50}
                          />
                        ) : null}

                        <h3 className="mb-3 font-bold my-auto text-white text-sm lg:text-xl">
                          {item.Title}
                        </h3>
                      </div>
                      <p className="text-sm leading-snug tracking-wide pt-2 text-gray-200 text-opacity-100">
                        {item.Paragraph}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-y-hidden ">
          <Footer />
        </div>
      </div>
      <div className="hidden md:block">
        <ScrollToTopButton />
      </div>
    </>
  );
};
export default HistoryTimeLine;
