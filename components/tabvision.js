import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { domin, onRun } from "@/api/config";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import DropDown from "./dropdpwn";

const createMarkup = (html) => {
  const sanitizedHtml = DOMPurify.sanitize(html);
  return { __html: sanitizedHtml };
};

const TabVision = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `${onRun}/tabvision/?Domain=${domin}`,
        headers: { "Content-Type": "application/json" },
      };
      try {
        const response = await axios.request(options);
        setData(response.data);
        if (response.data.length > 0) {
          setActiveTab(response.data[0].Title);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto py-40 min-h-screen flex items-center justify-center">
      <div
        dir="rtl"
        className="flex flex-col items-center rounded-lg md:max-w-8xl w-full h-auto bg-white p-8"
      >
        {data ? (
          <Tabs value={activeTab}>
            <TabsHeader
              className="max-w-5xl mx-auto rounded-none bg-transparent p-0 mb-4 flex justify-center"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-indigo-600 shadow-none rounded-none",
              }}
            >
              {data.map((tab) => (
                <Tab
                  key={tab.Title}
                  value={tab.Title}
                  onClick={() => setActiveTab(tab.Title)}
                  className={
                    activeTab === tab.Title
                      ? "text-indigo-600 pb-2 md:text-base text-xs"
                      : "text-gray-500 pb-2 md:text-base text-xs"
                  }
                >
                  {tab.Title}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
              className="max-w-8xl mx-auto"
            >
              {data.map((tab, index) => (
                <TabPanel key={index} value={tab.Title}>
                  <div
                    className="text-black mb-4 p-4 rounded-lg bg-gray-100 shadow-inner"
                    dangerouslySetInnerHTML={createMarkup(tab.Summer)}
                  />
                  <DropDown tab={tab} index={index} />
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default TabVision;
