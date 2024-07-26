import { domin, onRun } from "@/api/config";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const [data, setData] = useState(null);
  const postData = () => {
    axios
      .get(`${onRun}/slider/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
          setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(postData, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 6000,
    arrows: false,
  };
  if (data !== null) {
    return (
      <>
        {data ? (
          <div className="slider-container ">
            
            {data.length !== 1 ? (
              <Slider {...settings}>
                {data.map((i) => (
                  <div
                    key={Math.floor(Math.random() * 10000000)}
                    className="flex flex-row w-fit h-3/5"
                  >
                    <div className="relative mt-24 justify-center rounded-xl bg-white">
                      <Image
                        src={i.Picture}
                        className="w-screen h-3/5 "
                        width={1800}
                        height={500}
                        alt="error"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              data.map((i) => (
                
                <div
                  key={Math.floor(Math.random() * 10000000)}
                  className="flex flex-row w-fit h-fit"
                >
                  <div className="relative justify-center rounded-xl  bg-white">
                    <Image
                      src={i.Picture}
                      className="w-screen h-fit"
                      layout="fullWidth"
                      width={1800}
                      height={1000}
                      alt="error"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        ) : null}
      </>
    );
  }

};
export default SlideShow;
