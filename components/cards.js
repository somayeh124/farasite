import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { FaCommentsDollar, FaSquarePhone } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
 
import PopUp from "./popUp";
import Link from "next/link";

const TabsComponent = ({ product }) => {
  const [activeTab, setActiveTab] = useState("about");
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [hash , setHash ] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePopUpClick = () => {
    setIsPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
  };

  useEffect(() => {
    setHash(window.location.hash);
    if (hash.length > 2) {
      setTimeout(()=>{
        // console.log(hash.slice(1));
        // console.log(hash);
        const Element = document.getElementById(decodeURIComponent(hash.substring(1)));
        // console.log(hash.slice(1))
        // console.log(Element)

        if(Element){
          Element.scrollIntoView({ behavior:'smooth' });
        }
      }, 1000)
    }

  }, [product]);

  if (!product) {
    return <p className="bg-white"></p>;
  }


  return (
    <>
      <div className="w-full flex justify-center py-10">
        <div
          id={product.Title}
          className="w-3/4 bg-white border border-gray-200 rounded-lg shadow-xl shadow-indigo-200"
        >
          <ul
            className="flex items-center justify-between text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50"
            id="defaultTab"
            role="tablist"
          >
            <li className="mr-2">
              <button
                id="about-tab"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected={activeTab === "about"}
                className={`inline-block p-4 transition duration-300 ease-in-out ${
                  activeTab === "about"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick("about")}
              >
                {product.Title}
              </button>
            </li>
            <div className="flex items-center">
              <li className="mr-2">
                <FaCommentsDollar className="text-3xl text-gray-400 mx-2 transition-transform  duration-500 ease-in-out transform hover:text-green-500 hover:scale-110" />
              </li>
              <li className="mr-2">
                <FaSquarePhone className="text-3xl text-gray-400 mx-2 transition-transform duration-500 ease-in-out transform hover:text-indigo-500 hover:scale-110" />
              </li>
            </div>
          </ul>
          <div id="defaultTabContent" className="p-4">
            <Transition
              show={activeTab === "about"}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {activeTab === "about" && (
                <div className="flex items-center justify-between bg-white rounded-lg md:p-8">
                  <div className="flex-1">
                    <p className="mb-3 text-gray-500">{product.Description}</p>
                    <div className="flex space-x-4">
                      <button className="flex ml-2 items-center shadow-[inset_0_0_0_2px_#616467] text-black px-2 bg-white rounded-md  hover:bg-indigo-400 hover:text-gray-100 dark:text-neutral-700 transition duration-200 border-1 border-indigo-400">
                        <Link href={product.Url} className="flex items-center">
                          <IoInformationCircleOutline className="text-2xl ml-1" />
                          اطلاعات بیشتر
                        </Link>
                      </button>

                      <button
                        type="button"
                        className="flex items-center py-2 p-1 rounded-md bg-indigo-400 text-gray-100  transition duration-200 hover:bg-white hover:text-black border-2 border-indigo-400  hover:border-indigo-400 hover:shadow-2xl"
                        onClick={handlePopUpClick}
                      >
                        <MdOutlineShoppingBag className="text-2xl ml-1" />
                        شروع سرمایه گذاری
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </div>
        {isPopUpVisible && (
          <PopUp onClose={handleClosePopUp} productTitle={product.Title} />
        )}
      </div>
    </>
  );
};

export default TabsComponent;
