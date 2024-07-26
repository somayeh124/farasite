import Footer from "@/components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { domin, onRun } from "@/api/config";
import HeaderMenu from "@/components/HeaderMenu";

const Live = () => {
  const [data, setData] = useState(null);

  const getStream = () => {
    console.log(`${onRun}/live/?Domain=${domin}`, "live");
    axios
      .get(`${onRun}/live/?Domain=${domin}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data, "live");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  useEffect(() => {
    getStream();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      <HeaderMenu />
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-full max-w-6xl ">
          {data ? (
            data.map((item) => (
              <div
                key={item.id}
                className="w-full mb-8 bg-white rounded-lg overflow-hidden shadow-2xl"
              >
                <iframe
                  src={item.Play}
                  className="w-full h-96"
                  frameBorder="0"
                  allowFullScreen
                />
                <div className="p-4 flex justify-center">
                  <Link
                    target="_blank"
                    href={item.Url}
                    className="bg-indigo-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 shadow-2xl duration-300"
                  >
                    مشاهده بیشتر در آپارات
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-16">
              در حال بارگذاری ....
            </div>
          )}
        </div>
      </div>
      {/* <Footer className="mt-auto" /> */}
    </div>
  );
};

export default Live;
