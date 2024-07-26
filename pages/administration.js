import { domin, onRun } from "@/api/config";
import AdminCard from "@/components/adminCard";
import Footer from "@/components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderMenu from "@/components/HeaderMenu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { none } from "@material-tailwind/html/theme/base/shadows";

const Aministration = () => {
  const getAministration = () => {
    axios
      .get(`${onRun}/chart/?Domain=${domin}`)
      .then((res) => {
        console.log("chart data is", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SliderSettings = {
    className:
      "flex flex-row flex-col w-full hover:bg-gray-200  font-bold py-2 px-4 rounded-xl mb-10 hidden duration-700 ease-in-out opacity-90 hover:opacity-100  ",
    focusOnSelect: true,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const [data, setData] = useState([
    {
      pos: "",
      personal: [
        {
          Domain: domin,
          Email: "",
          Name: "",
          Picture: "",
          Position: "",
          Telephone: "",
          Title: "",
          id: "",
        },
      ],
      children: [
        {
          personal: [
            {
              Domain: domin,
              Email: "",
              Name: "",
              Picture: "",
              Position: "",
              Telephone: "",
              Title: "",
              id: "",
            },
          ],
          pos: "",
        },
      ],
    },
  ]);

  useEffect(getAministration, []);

  return (
    <div className="bg-white ">
      <div className="bg-white ">
        <div>
          <div className="h-20 bg-white">
            <HeaderMenu />
          </div>
          <div className=" ml-10 items-center  shadow-lg border-2 bg-gray-50 border-gray-300 m-3 ">
            {data.map((item) => (
              <div key={Math.random()}>
                <Slider {...SliderSettings}>
                  {item.personal.map((per) => (
                    <AdminCard
                      
                      key={per.id}
                      source={per.Picture}
                      title={per.Title}
                      name={per.Name}
                      email={per.Email}
                      phone={per.Telephone}
                    />
                  ))}
                </Slider>

                <div>
                  <Slider {...SliderSettings}>
                  {item.children.map((child) =>
                    child.personal.map((perChild) => (
                      <AdminCard
                       
                        key={perChild.id}
                        source={perChild.Picture}
                        title={perChild.Title}
                        name={perChild.Name}
                        email={perChild.Email}
                        phone={perChild.Telephone}
                      />
                    ))
                  )}
                  </Slider>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full my-16">
        <Footer />
      </div>
    </div>
  );
};

export default Aministration;
