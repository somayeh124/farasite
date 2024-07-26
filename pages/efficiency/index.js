import axios from "axios";
import { useEffect, useState } from "react";
import { domin, onRun } from "../../api/config";

const efficiencyItems = [
  { id: 0, Number: "14.37", Title: "بازدهی شش ماهه سبد" },
  { id: 0, Number: "16.14", Title: "بازدهی سه ماهه سبد" },
  { id: 0, Number: "0.53", Title: "بازدهی نه ماهه سبد" },
  { id: 0, Number: "19.95", Title: "بازدهی سالیانه سبد" },
  { id: 0, Number: "-0.12", Title: "بازدهی هفتگی سبد" },
];
const Efficiency = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    axios
      .get(`${onRun}/efficiency/bazdehi/?Domain=${domin}`)
      .then((res) => {
        if (res.data.lenght > 0) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(getData, []);
  return (
    <>
      {/* {data ? ( */}
      <div className="bg-white pt-10 pb-10 py-10">
        <div className="mx-auto w-full max-w-4xl py-8 text-center text-4xl font-bold text-[#232563]">
          <div className="relative flex py-5 justify-center items-center">
            <p className="flex-shrink mx-12 text-3xl font-extrabold sm:text-4xl my-auto text-[#232563]">
              بازدهی دوره‌ای
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center xl:flex-row xl:justify-between">
          {/* {data? */}

          {efficiencyItems.map((items) => (
            <div
              key={Math.floor(Math.random() * 10000000)}
              className="bg-[#232563] w-72 flex-col my-3 mx-5  text-white text-center rounded-2xl px-12 py-8"
            >
              <p className="text-3xl font-extrabold">
                <span>{items.Number}</span>
              </p>
              <p className="text-xl font-semibold">{items.Title}</p>
            </div>
          ))}
          {/* : null} */}
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
};
export default Efficiency;
