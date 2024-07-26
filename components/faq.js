import { domin, onRun } from "@/api/config";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <>
      {id === open ? (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
        >
          <path d="M5 12h14" />
        </svg>
      ) : (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          className={`h-5 w-5 transition-transform`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      )}
    </>
  );
}

export default function FrequentlyQuestion() {
  const [data, setData] = useState([]);
  const postData = () => {
    axios
      .get(`${onRun}/questions/?Domain=${domin}`)
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

  const [open, setOpen] = React.useState(9999);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {data ? (
        <section>
          <div className="mx-auto w-full max-w-4xl px-4 py-6" id="faq">
            {/* title */}
            <div className="py-3 text-center text-4xl font-bold text-[#232563]">
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
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                    />
                  </svg>
                  <p className="flex-shrink mx-12 text-3xl font-extrabold sm:text-4xl my-auto text-[#232563]">
                    سوالات‌متداول{" "}
                  </p>
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="pr-5  hidden sm:block"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                    />
                  </svg>
                  <div className="hidden sm:block flex-grow border-t-2 border-gray-900"></div>
                </div>
              </div>

              <div className="hidden  relative sm:grid justify-items-center ">
                <div className="flex flex-row">
                  <p className="text-xl text-[#232563] ">خانه</p>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="0.5em"
                    width="1em"
                    className="my-1"
                  >
                    <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                  </svg>
                  <p className="text-xl text-[#232563]">سوالات متداول</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-7xl px-4 py-6">
            {data.map((item) => {
              return (
                <Accordion
                  key={Math.floor(Math.random() * 10000)}
                  open={open === item.id}
                  className="mb-2 rounded-lg text-right bg-[#F3F3F3] shadow-md px-4 my-5"
                  icon={<Icon id={item.id} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(item.id)}
                    className={`border-b-0 transition-colors text-base md:text-xl text-right ${
                      open === item.id ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {item.Question}
                  </AccordionHeader>
                  <AccordionBody className="pt-0 text-sm font-normal md:text-lg">
                    {item.Answer}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
}
