import { domin, onRun } from "@/api/config";
import axios from "axios";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    axios
      .get(`${onRun}/statistics/?Domain=${domin}`)
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data ? (
        <div className="bg-white pt-10 pb-20 py-10">
          <div className="mx-auto w-full max-w-4xl py-8 text-center text-4xl font-bold text-[#232563]">
            <div className="relative flex py-5 justify-center items-center">
              <p className="flex-shrink mx-12 text-3xl font-extrabold sm:text-4xl my-auto text-[#232563]">
                آمار
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center  xl:flex-row xl:justify-between outline-double outline-5 outline-offset-2 outline-pink-500">
            {data
              ? data.map((items) => (
                  <div
                    key={items.id}
                    className="bg-[#232563] w-72 flex-col my-3 mx-5 text-white text-center rounded-2xl px-12 py-8"
                  >
                    <p className="text-3xl font-extrabold">
                      <span className=" mb-2">{items.Number}</span>
                    </p>
                    <p className="text-xl font-semibold m-2">{items.Title}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Statistics;
