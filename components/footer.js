import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import DOMPurify from "dompurify";
import { domin, onRun } from "@/api/config";
import Image from "next/image";
import nama1 from "../images/enamad.png";
import { TbSettingsCode } from "react-icons/tb";

import { AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { FaPersonShelter } from "react-icons/fa6";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [data, setData] = useState([]);
  const [enemad, setEnemad] = useState("");
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [relatedLinksResponse, informationResponse] = await Promise.all([
          axios.get(`${onRun}/relatedlinks/?Domain=${domin}`),
          axios.get(`${onRun}/information/?Domain=${domin}`),
        ]);

        setData(relatedLinksResponse.data);
        setEnemad(informationResponse.data.Enemad);
        
        setSocialLinks({
          instagram: informationResponse.data.instagram,
          telegram: informationResponse.data.telegram,
          twitter: informationResponse.data.tweeter,
          linkedIn : informationResponse.data.linkedIn
        });
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const createMarkup = (html) => {
    const sanitizedHtml = DOMPurify.sanitize(html);
    return { __html: sanitizedHtml };
  };

  return (
    <>
      <footer className="footer text-base-content p-10 bg-gray-200 shadow-2xl">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <nav className="w-full sm:w-1/2 lg:w-1/3">
            <h6 className="footer-title text-indigo-900 flex">
              <Link
                target="_blank"
                href="https://isatispooya.com"
                className="text-lg"
                key="link-isatispooya"
              >
                ایساتیس پویا
              </Link>
              <MdOutlineHomeRepairService className="mr-1 text-xl" />
            </h6>
            <Link
              href="/#about"
              key="link-about"
              className="block text-sm text-gray-600 hover:text-indigo-400"
            >
              درباره‌ما
            </Link>
            <Link
              href="/#contact"
              key="link-contact"
              className="block text-sm text-gray-600 hover:text-indigo-400"
            >
              تماس‌با‌ما
            </Link>
            <Link
              href="/#businesscom"
              key="link-businesscom"
              className="block text-sm text-gray-600 hover:text-indigo-400"
            >
              شرکای‌تجاری
            </Link>
          </nav>
          <nav className="w-full sm:w-1/2 lg:w-1/3">
            <h6 className="footer-title text-indigo-900 flex">
              <span className="text-lg">شرکت ها</span>
              <FaPersonShelter className="mr-1 text-lg" />
            </h6>
            <div className="grid grid-cols-2 gap-2">
              {data.map((item, index) => (
                <Link
                  className="truncate text-sm link-hover text-gray-600 hover:text-indigo-400"
                  key={index}
                  href={item.Link}
                >
                  {item.Title}
                </Link>
              ))}
            </div>
          </nav>
          <nav className="w-full lg:w-1/3">
            <div>
              {enemad ? (
                <div dangerouslySetInnerHTML={createMarkup(enemad)} />
              ) : (
                <Image
                  src={nama1}
                  alt="enama"
                  className="sm:w-32 w-15 h-fit px-1"
                />
              )}
            </div>
          </nav>
        </div>
      </footer>
      <footer className="footer bg-indigo-300 text-base-content border-gray-700 border-t px-10 py-4">
        <aside className="grid-flow-col items-center mr-11">
          <Link
            className="hover:underline"
            href={"https://findev.isatispooya.com"}
            target="_blank"
          >
            <TbSettingsCode className="text-5xl text-gray-100 hover:scale-110 duration-300" />
          </Link>
          <p className="text-gray-100">
            تمام حقوق مادی و معنوی این سایت متعلق به شرکت توسعه و اطلاعات
            <br />
            ایساتیس پویا
            <br />
            <Link
              className="hover:underline font-bold text-md"
              href={"https://findev.isatispooya.com"}
              target="_blank"
            >
              findev
            </Link>
            <span> می‌باشد.</span>
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 ml-11">
            {socialLinks.instagram && (
              <Link href={socialLinks.instagram}>
                <FaInstagram className="text-3xl text-gray-100 hover:scale-110 duration-300" />
              </Link>
            )}
            {socialLinks.telegram && (
              <Link href={socialLinks.telegram}>
                <TbBrandTelegram className="text-3xl text-gray-100 hover:scale-110 duration-300" />
              </Link>
            )}
            {socialLinks.twitter && (
              <Link href={socialLinks.twitter}>
                <FaXTwitter  className="text-3xl text-gray-100 hover:scale-110 duration-300" />
              </Link>
            )}
            {socialLinks.twitter && (
              <Link href={socialLinks.twitter}>
                <AiOutlineLinkedin  className="text-3xl text-gray-100 hover:scale-110 duration-300" />
              </Link>
            )}

          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;


