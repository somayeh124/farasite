import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination, Navigation, EffectFlip } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { domin, onRun } from "@/api/config";

const BusinessPartners = () => {
    const [data, setData] = useState(null);

    const getup = () => {
        axios
            .get(`${onRun}/businessPartners/?Domain=${domin}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(getup, []);

    return (
        <section className="bg-white" id="businesscom">
            <div className="container px-6 py-10 mx-auto">
                <div className="py-3 text-center text-4xl text-[#232563] max-w-4xl mx-auto mt-2">
                    <div className="relative flex py-5 justify-center items-center">
                        <div className="hidden sm:block flex-grow border-t-2 border-[#232563] z-10" />
                        <svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className="pl-5 hidden sm:block"
                        >
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                        <p className="flex-shrink mx-12 text-3xl font-extrabold sm:text-4xl my-auto text-[#232563]">
                            شرکای‌تجاری{" "}
                        </p>
                        <svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className="pr-5 hidden sm:block"
                        >
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                        <div className="hidden sm:block flex-grow border-t-2 border-gray-900"></div>
                    </div>
                    <div className="relative grid justify-items-center">
                        <p className="max-w-4xl mx-auto mt-2 text-center font-medium text-gray-500 text-base">
                            شرکای تجاری ما با همکاری در تأمین مواد اولیه ، توسعه بازارهای جدید
                            و سرمایه گذاری ، به رشد و بهبود عملکرد شرکت کمک می‌کنند.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mb-8 md:grid-cols-1 xl:grid-cols-1">
                    {data ? (
                        <div>
                            {/* Web slide */}
                            <div className="hidden lg:flex">
                                <Swiper
                                    spaceBetween={20}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    loop={true}
                                    slidesPerView={data.length >= 4 ? 3 : 2}
                                    speed={500}
                                    grabCursor={true}
                                    navigation={true}
                                    centeredSlides={true}
                                    className="lg:max-w-3xl py-7 grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 xl:grid-cols-1"
                                >
                                    {data.map((i) => (
                                        <SwiperSlide
                                            className="shadow-sm rounded-xl"
                                            key={i.id || Math.random()}
                                        >
                                            <Link href={i.Link} target="_blank">
                                                <div className="flex flex-col h-72 items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#232563]">
                                                    <Image
                                                        width={50}
                                                        height={200}
                                                        className="object-none size-32 rounded-full ring-2 ring-gray-300 p-0.5 bg-white"
                                                        src={i.Logo}
                                                        alt="error"
                                                    />
                                                    <h1 className="mt-4 font-semibold text-center text-[#232563] capitalize group-hover:text-white">
                                                        {i.Name}
                                                    </h1>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            {/* Mobile slide */}
                            <div className="lg:hidden">
                                <Swiper
                                    effect={"flip"}
                                    grabCursor={true}
                                    modules={[EffectFlip, Autoplay]}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}
                                    centeredSlides={true}
                                    className="lg:max-w-5xl py-7 bg-white grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 xl:grid-cols-1"
                                >
                                    {data.map((i) => (
                                        <SwiperSlide
                                            className="shadow-sm rounded-xl bg-white"
                                            key={i.id || Math.random()}
                                        >
                                            <Link href={i.Link}>
                                                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#232563]">
                                                    <Image
                                                        width={50}
                                                        height={200}
                                                        className="object-none size-32 rounded-full ring-2 ring-gray-300 p-0.5 bg-white"
                                                        src={i.Logo}
                                                        alt="error"
                                                    />
                                                    <h1 className="mt-4 xl:text-2xl lg:text-lg font-semibold text-center text-[#232563] capitalize group-hover:text-white">
                                                        {i.Name}
                                                    </h1>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BusinessPartners;
