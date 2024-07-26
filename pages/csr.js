import Footer from "@/components/footer";
import Image from "next/image";
import banner from "../images/csr.jpg";
import detaiales from "../images/umbrella.png";
// import Header from "../components/header";
import HeaderMenu from "@/components/HeaderMenu";
import axios from "axios";
import { domin, onRun } from "../api/config";
import { useEffect, useState } from "react";
const CSR = () => {
  const [data, setData] = useState(null);
  const getCsr = () => {
    axios
      .get(`${onRun}/SocialResponsibility/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
          setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getCsr, []);
  return (
    <>

      <HeaderMenu />
      {" "}
      {
        data ? (
          <div className="bg-white z-30">
            <Image
              className="hidden lg:flex w-full absolute top-[6.5rem]"
              width={2000}
              height={2000}
              src={banner}
              alt="csrBanner"
            />
            <div className="text-center  mx-auto py-10 text-[#232563] font-bold text-sm px-3 lg:text-lg bg-gradient-to-r from-white to-gray-200">
              <h3>
                شرکت صنایع مفتول ایساتیس پویا برای انجام رسالت های اجتماعی خود
                که از مهمترین فعالیت های شرکت های بزرگ امروزی محسوب می شود،
                مسئولیت اجتماعی خود را از چهار جانب دنبال می کند.
              </h3>
            </div>
            {data.map((item, index) => (
              <div key={Math.floor(Math.random() * 10000000)} className="w-full">
                <div
                  className={`w-full  h-fit  px-5 lg:px-32 lg:py-10  ${index===0 ? "lg:mt-[28rem]  xl:mt-[35rem]" : "mt-0"
                    }`}
                >
                  <div className="flex md:flex-row px-5 xl:px-0 flex-col items-center md:justify-between pt-10">
                    <div className="md:pe-24 flex flex-col md:w-2/3 w-full text-start">
                      <h3 className="font-bold md:text-3xl text-2xl text-[#232563] my-2">
                        {item.Title}
                      </h3>
                      <p
                        className="text-sm md:text-base font-normal text-gray-600 my-2"
                        dangerouslySetInnerHTML={{ __html: item.Content }}
                      />
                    </div>
                    <div className="md:px-0 px-10 py-6 md:py-0 md:w-1/3 items-center justify-center content-center justify-items-center flex">
                      <Image
                        className=" h-64 w-52 "
                        src={item.Picture}
                        alt="csrBanner"
                        width={530}
                        height={370}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full divide-y divide-dashed" />
              </div>
            ))}
          </div>
        ) : null

      }
      <Footer />
    </>
  );
};
export default CSR;
