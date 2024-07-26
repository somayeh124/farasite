import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";

import { domin, onRun } from "@/api/config";

import Link from "next/link";

const AboutTabs = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const getTabs = () => {
    axios
      .get(`${onRun}/ContentTabs/?Domain=${domin}`)
      .then((response) => {
        if (response.data.length > 0) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error, "stockDetails");
      });
  };
  useEffect(getTabs, []);
  return(
    <>
            {data !== null
        ? data.map((items) => (
            <div key={items.id} className=" mx-auto lg:py-10 py-5">
              <div className="py-3 text-center text-4xl text-[#232563] max-w-4xl mx-auto my-5 ">
                <div className="mx-auto w-full max-w-4xl  py-3 text-center text-4xl font-bold text-[#232563]">
                  <div className="relative flex py-5 justify-center items-center">
                    <p className="flex-shrink mx-3 text-xl md:mx-12 md:text-3xl font-extrabold sm:text-4xl my-auto text-[#232563]">
                      {items.Title}
                    </p>
                  </div>
                </div>
                <div className="relative grid justify-items-center ">
                  <p className="max-w-4xl mx-auto mt-2 text-center font-normal text-gray-600 text-sm md:text-lg">
                    {items.Description}
                  </p>
                </div>
              </div>
              <Tabs value={items.children[0].TitleTab}>
                <TabsHeader
                  className="max-w-4xl mx-auto rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                  indicatorProps={{
                    className:
                      "bg-transparent border-b-2 border-[#67308F] shadow-none rounded-none",
                  }}
                >
                  {items.children.map((tab) => (
                    <Tab
                      key={tab.TitleTab}
                      value={tab.TitleTab}
                      onClick={() => setActiveTab(tab.TitleTab)}
                      className={
                        activeTab === tab.TitleTab
                          ? "text-[#232563] pb-2 md:text-base text-xs"
                          : "text-gray-500 pb-2 md:text-base text-xs"
                      }
                    >
                      {tab.TitleTab}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                  className="max-w-7xl bg-white mx-auto"
                >
                  {items.children.map((child) => (
                    <TabPanel key={child.TitleTab} value={child.TitleTab}>
                      <div className="flex md:flex-row px-5  xl:px-0 flex-col items-center md:justify-between pt-10">
                        <div className="md:pe-24 flex flex-col md:w-2/3 w-full text-start">
                          <h3 className="font-bold md:text-3xl text-2xl text-[#232563] my-2">
                            {child.Question}{" "}
                          </h3>
                          <p className="text-sm md:text-base font-normal text-gray-600 my-2">
                            {child.Answer}
                          </p>
                          <Link
                            href={child.Link}
                            className="ring-[#232563] ring-1 md:ring-2 jkkjkkk text-[#232563] text-sm md:text-base font-semibold md:font-bold w-fit  hover:bg-[#232563] hover:text-white rounded-3xl mt-6 py-3 px-4  "
                          >
                            اطلاعات بیشتر...{" "}
                          </Link>
                        </div>
                        <Image
                          className="w-full md:px-0 px-10 py-6 md:py-0 md:w-1/3"
                          src={`http://farasite.fidip.ir${child.Image}`}
                          alt=""
                          width={532}
                          height={370}
                        />
                      </div>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          ))
        : null}
    </>
  )
};
export default AboutTabs;
