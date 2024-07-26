import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/api/config";

const ComprsionContent = () => {
  const [data, setData] = useState(null);

  const GetComprasion = () => {
    axios
      .get(`${onRun}/ContentComparison/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
            setData(response.data);
          }
      })
      .catch((error) => {
        console.log(error, "comprisionsContent");
      });
  };
  useEffect(GetComprasion, []);
  if(data !== null){
    return(
        <div  className="w-full h-full bg-gray-100 px-5 xl:px-0 py-20 shadow-inner">
            {data ? data.map((item) => (
                <div key={item.id}>
                  <div className="text-center text-4xl pb-4 text-[#232563] max-w-4xl mx-auto">
                    <div className="mx-auto w-full max-w-4xl pb-3 text-center text-4xl font-bold text-[#232563]">
                      <div className="relative flex py-5 justify-center items-center">
                        <p className="flex-shrink mx-12 text-xl font-extrabold md:text-4xl my-auto text-[#232563]">
                          {item.Title}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="relative grid justify-items-center pb-10 ">
                      <p className="max-w-4xl mx-auto mt-2 text-center font-normal text-gray-600 text-lg md:text-xl">
                        {item.Description}
                      </p>
                    </div>
                  </div>
    
                  <div className="bg-white mx-auto max-w-7xl text-black rounded-3xl shadow-xl p-5">
                    <div className="grid grid-cols-1 gap-x-1 gap-y-16 text-center lg:grid-cols-3">
                      {item.children.map((child) => (
                        <div
                          key={child.Title}
                          className="mx-auto flex w-full h-full pb-5 px-6 content-center rounded-3xl max-w-xs flex-col hover:bg-gray-100 relative"
                        >
                          <div className="absolute -top-14 flex justify-center -ms-6 w-full">
                            <Image
                              src={`http://farasite.fidip.ir${child.Image}`}
                              width={110}
                              height={70}
                              alt=""
                            />
                          </div>
                          <div className="text-center py-3 pt-14 ">
                            <h4 className="text-lg font-bold py-3">
                              {child.Title}
                            </h4>
                            <p className="leading-8 ">{child.Description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )) : null }
        </div>
      )
  }

};
export default ComprsionContent;
