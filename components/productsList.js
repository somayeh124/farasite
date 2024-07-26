import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/api/config";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductsList = (props) => {
  const [data, setData] = useState(null);
  const [productName, setProductName] = useState(null);

  const getup = () => {
    axios
      .get(`${onRun}/products/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
          props.setIsProduct(true);
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${onRun}/productname/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
          setProductName(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{getup, []});

  return (
    <section>
      {data ? (
        <div className="py-6  pt-28">
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
              {productName ? (
                <>
                  {productName.map((product) => (
                    <p
                      key={Math.floor(Math.random() * 10000000)}
                      className="flex-shrink mx-12 text-3xl font-extrabold sm:text-4xl my-auto text-[#232563]"
                    >
                      {product.Name}
                    </p>
                  ))}
                </>
              ) : null}
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
          <div
            className="max-w-7xl mx-auto  w-full lg:px-24 md:px-14 px-6 pb-8 flex flex-wrap items-center justify-center"
            id="product"
          >

          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ProductsList;
