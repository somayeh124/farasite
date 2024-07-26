import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/api/config";
import Link from "next/link";

const CompaniesSection = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    axios
      .get(`${onRun}/introductionofcompanies/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error, "companiesSection");
      });
  };
  useEffect(getData, []);
    return (
      <>
        {data ? (
          <div className="w-full h-full bg-indigo-400">
            <div className="mx-auto max-w-[100rem] flex flex-wrap w-fit pb-10 xl:px-5 px-3 pt-36 h-full content-center justify-center">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row m-2 p-4 fill-transparent rounded-md h-fit xl:h-48 w-fit  transition duration-300 ease-in-out hover:scale-110"
                  style={{
                    backgroundColor: item.Background , 
                    flex: Math.floor(10000 * Math.random()),
                  }}
                >
                  <Link
                    target="_blank"
                    href={item.Link}
                    className="flex flex-col text-center w-full items-center justify-center content-center"
                  >
                    <Image src={item.Logo} alt="logo" width={70} height={70} />
                    <p className="w-36 text-white py-2 font-extrabold text-base">
                      {item.Name}
                    </p>
                  </Link>
                  <div className="flex items-center content-start w-full justify-start text-white pt-4">
                    <p className="font-light text-sm w-fit sm:w-44 text-wrap border-white border-s-2 ms-3 ps-4">
                      {item.ShortAboutUs}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </>
    );

 

};
export default CompaniesSection;
