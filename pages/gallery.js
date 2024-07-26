// import Footer from "@/components/Footer";
// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { domin, onRun } from "@/api/config";
// // import Header from "../components/header";
// import HeaderMenu from "@/components/HeaderMenu";

const Gallery = () => {
  // const [picture, setPicture] = useState([
  //   { Alt: "", CreateAt: "", Domain: "", Picture: "", id: "", route: "" },
  // ]);
  // const [video, setVideo] = useState([
  //   {
  //     Alt: "",
  //     CreateAt: "",
  //     Domain: "",
  //     ShortVideo: "",
  //     Video: "",
  //     id: "",
  //     route: "",
  //   },
  // ]);
  // const data = [
  //   {
  //     label: "عکس",
  //     value: "picture",
  //     images: picture || null,
  //   },
  //   {
  //     label: "ویدئو",
  //     value: "video",
  //     videos: video || null,
  //   },
  // ];

  // const getPicture = () => {
  //   axios
  //     .get(`${onRun}/galleryphoto/?Domain=${domin}`)
  //     .then((response) => {
  //       setPicture(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const getVideo = () => {
  //   axios
  //     .get(`${onRun}/galleryvideo/?Domain=${domin}`)
  //     .then((response) => {
  //       setVideo(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(getPicture, []);
  // useEffect(getVideo, []);

  return (
    <>
      {/* <HeaderMenu />
      {video && picture ? (
        <div className="  bg-white py-28">
          <div className="bg-gray-200 m-10 rounded-lg h-full shadow-lg lg:p-10  pt-5">
            <Tabs value="picture">
              <TabsHeader className="bg-[#232563] mx-auto w-5/6 md:w-3/6 lg:w-2/6">
                {data.map(({ label, value }) => (
                  <Tab
                    key={Math.floor(Math.random() * 10000000)}
                    value={value}
                    className="text-indigo-300 transition-transform "
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody className="grid grid-cols-1 gap-4  ">
                {data.map(({ value, images, videos }) => (
                  <TabPanel
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 h-fit "
                    key={Math.floor(Math.random() * 10000000)}
                    value={value}
                  >
                    {images?.map((item) => (
                      <div
                        key={Math.floor(Math.random() * 10000000)}
                        className="group relative flex h-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                      >
                        <Image
                          className="h-full w-full  absolute inset-0 transition duration-200 group-hover:scale-110 z-10 max-w-full shadow-lg  rounded-lg object-cover object-center"
                          width={1000}
                          height={1000}
                          src={item.Picture}
                          alt={item.Alt}
                        />
                        <div className="z-50 pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                        <span className="relative mr-4 mb-3 z-50 inline-block text-sm text-white md:ml-5 md:text-lg">
                          {item.Alt}
                        </span>
                      </div>
                    ))}

                    {videos?.map((item) => (
                      <div
                        key={Math.floor(Math.random() * 10000000)}
                        className="my-5  group relative  h-fit items-end overflow-hidden rounded-lg bg-gray-100  md:h-fit"
                      >
                        <Link target="_blank" href={item.Video}>
                          <video
                            className="flex  w-full max-w-full rounded-lg object-cover object-center justify-center"
                            autoPlay
                            muted
                            controls
                          >
                            <source src={item.ShortVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </Link>
                        {/* <div className="z-50 pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" /> */}
                        {/* <span className=" py-2 bg-gray-200 text-xs font-extralight  xl:font-medium  flex flex-row justify-between px-6 text-end">
                          {item.Alt}
                          <Link
                            href={item.Video}
                            target="_blank"
                            className="text-indigo-800 font-extralight"
                          >
                            برای مشاهده کامل ویدئو کلیک کنید.
                          </Link>
                        </span>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      ) : null}

      <div className="">
        <Footer />
      </div> */} 
      <div className="text-sm">h</div>
    </>
  );
};

export default Gallery;
