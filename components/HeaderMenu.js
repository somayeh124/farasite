import { domin, onRun } from "@/api/config";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeaderMenu = () => {
  const [data, setData] = useState(null);
  const [superMenu, setSuperMenu] = useState(null);
  const [superMenuOpen, setSuperMenuOpen] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(null);
  const [quickaccess, setQuickaccess] = useState();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const getSuperMenu = () => {
    axios.get(`${onRun}/supermenus/?Domain=${domin}`).then((response) => {
      setSuperMenu(response.data);
    });
  };

  const getData = () => {
    axios
      .get(`${onRun}/information/?Domain=${domin}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${onRun}/quickaccess/?Domain=${domin}`)
      .then((response) => {
        setQuickaccess(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlerMenu = (act, id) => {
    if (act) {
      setSuperMenuOpen(id);
    } else {
      setSuperMenuOpen(null);
    }
  };

  useEffect(() => {
    getSuperMenu();
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {superMenu ? (
        <nav
          className={`fixed shadow-xl z-50 flex items-center justify-center w-full bg-gray-200 p-2  duration-700 ${
            showNavbar
              ? "transform translate-y-0"
              : "transform -translate-y-full"
          }`}
        >
          <div
            id="LOGO"
            className="flex items-center ml-auto justify-center space-x-0"
          >
            <div className="row-span-1 bg-gray-200 bottom-0 space-x-2 mt-1 bg-gradient-to-r flex items-center shrink-0 ">
              {data ? (
                <Link href="/">
                  <Image
                    className="justify-between h-20 w-auto my-auto mr-1 mx-auto transition-all duration-300 hover:scale-110"
                    src={data.Logo2}
                    alt="error"
                    width={1000}
                    height={1000}
                  />
                </Link>
              ) : (
                <Skeleton height={80} width={80} />
              )}
              {data && data.Logotext ? (
                <Image
                  className="h-12 w-auto my-auto mr-1 px-2 hidden lg:block"
                  src={data.Logotext}
                  alt="Logo Text"
                  width={900}
                  height={900}
                  quality={100}
                  unoptimized={true}
                />
              ) : (
                <Skeleton height={48} width={200} />
              )}
            </div>
          </div>

          <div
            id="menu"
            className="items-center justify-center font-medium hidden md:flex md:w-auto md:order-1 m-auto mb-0"
          >
            <ul className="flex items-center justify-center space-x-4 mt-0 flex-col p-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 rounded-xl pr-2 pl-2">
              {superMenu.map((item) => (
                <li key={item.id}>
                  <Menu
                    open={superMenuOpen === item.id}
                    handler={(act) => handlerMenu(act, item.id)}
                    allowHover
                  >
                    <MenuHandler>
                      <Button
                        variant="text"
                        className="p-0 truncate tracking-normal mb-3 inline-flex items-center hover:text-indigo-600 gap-x-1 text-base font-bold leading-6 text-gray-900"
                      >
                        <span
                          className="text-gray-900 border-none hover:text-indigo-600"
                          allowHover
                        >
                          {item.title || <Skeleton width={100} />}
                        </span>
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </Button>
                    </MenuHandler>
                    {data ? (
                      <MenuList className="space-x-5 mt-5 flex justify-center lg:mt-8 sm:mt-5 md:mt-5.5 items-center z-50 bg-scroll shadow-2xl bg-gray-200">
                        {data && (
                          <div className="flex flex-col items-center px-10 m-7 border-dotted border-l-2 border-gray-300">
                            {item.sub.map((itemSub) =>
                              itemSub.type === "دکمه" ? (
                                <div
                                  key={itemSub.id}
                                  className="w-full relative flex justify-between flex-wrap gap-3"
                                >
                                  <div className="text-lg m-6 text-indigo-700 group relative w-max">
                                    <div className="flex space-x-5 items-center">
                                      <Image
                                        src={itemSub.icon}
                                        alt="small icons"
                                        width={55}
                                        height={55}
                                        className="hover:scale-110 ml-3"
                                      />
                                      <Link href={itemSub.url}>
                                        {itemSub.title}
                                      </Link>
                                    </div>
                                    <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                                  </div>
                                </div>
                              ) : null
                            )}
                          </div>
                        )}
                        {data ? (
                          <div className="w-full flex rounded-md h-full shadow-none transition-shadow duration-700 cursor-pointer">
                            <ul className="flex flex-col space-y-2">
                              {item.sub.map((itemSub) =>
                                itemSub.type === "لینک" ? (
                                  <li
                                    key={itemSub.id}
                                    className="flex items-center w-full mr-2 space-x-3 rounded-lg text-indigo-500 transition-all duration-300 hover:scale-100 hover:font-bold"
                                  >
                                    <FaArrowLeft
                                      alt="arrowleft"
                                      className="ml-2 flex"
                                    />
                                    <a href={itemSub.url}>
                                      <div className="truncate text-base flex">
                                        {itemSub.title}
                                      </div>
                                    </a>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </div>
                        ) : null}

                        <div>
                          {data ? (
                            <div
                              className="flex mt-4 w-full mx-20 mr-20"
                              style={{ marginLeft: "80px" }}
                            >
                              <Link href="/">
                                {item.vector && (
                                  <Image
                                    src={item.vector}
                                    alt="isatis"
                                    width={120}
                                    height={120}
                                    className="mx-10 hover:scale-105 duration-400"
                                  />
                                )}
                              </Link>
                            </div>
                          ) : null}
                        </div>
                      </MenuList>
                    ) : null}
                  </Menu>
                </li>
              ))}
            </ul>
          </div>

          <div className="items-center justify-center font-medium hidden md:flex md:w-auto md:order-1">
            {quickaccess && quickaccess.length > 0 && (
              <div className="flex items-center">
                {quickaccess.map((item, index) => (
                  <div key={item.id || `${item.Title}-${index}`}>
                    <Link
                      target="_blank"
                      href={item.Url}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <Button className="relative transition-all duration-300 hover:scale-110 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative truncate px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                          {item.Title}
                        </span>
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 mt-2 flex items-center mr-20 rounded-lg md:hidden transition-all duration-300 hover:scale-110 hover:bg-indigo-400"
            >
              <FaBars alt="bars" className="text-black text-2xl" />
            </button>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        ></Dialog.Title>
                        <div className="mt-4">
                          <ul className="flex flex-col space-y-4">
                            {superMenu.map((item) => (
                              <Disclosure key={item.id} as="div">
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      onClick={() => setDisclosureOpen(item.id)}
                                      className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                                    >
                                      <span>
                                        {item.title || <Skeleton width={100} />}
                                      </span>
                                      <svg
                                        className={`w-5 h-5 text-gray-500 transition-transform transform ${
                                          open ? "rotate-180" : "rotate-0"
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M19 9l-7 7-7-7"
                                        />
                                      </svg>
                                    </Disclosure.Button>
                                    {disclosureOpen === item.id && (
                                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        <ul className="space-y-2 mt-5">
                                          {item.sub.map((itemSub) => (
                                            <li
                                              key={itemSub.id}
                                              className="flex items-center border-solid hover:border-dotted m-2 hover:text-indigo-600"
                                            >
                                              <a
                                                href={itemSub.url}
                                                className="text-base font-bold text-gray-900 hover:text-indigo-600 max-w-xs truncate relative group"
                                              >
                                                {itemSub.title}
                                                <span className="absolute w-auto p-2 bg-white border border-gray-300 shadow-lg rounded hidden group-hover:block z-10">
                                                  {itemSub.title}
                                                </span>
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </Disclosure.Panel>
                                    )}
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4"></div>
                        <Disclosure>
                          {quickaccess && quickaccess.length > 0 && (
                            <div className="flex items-center mb-5">
                              {quickaccess.map((item, index) => (
                                <div key={item.id || `${item.Title}-${index}`}>
                                  <Link href={item.Url}>
                                    <button className="flex transition-all duration-300 hover:scale-110 items-center space-x-1 rounded-lg px-3 py-1 m-2 text-center text-sm font-base bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                      <span className="truncate max-w-md px-2 py-2.5 text-sm font-base">
                                        {item.Title}
                                      </span>
                                    </button>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                        </Disclosure>
                        <button
                          type="button"
                          className="inline-flex bg-red-500 transition-all duration-300 hover:scale-110 justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none"
                          onClick={() => setIsOpen(false)}
                        >
                          بستن
                        </button>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </nav>
      ) : (
        <Skeleton height={80} />
      )}
    </>
  );
};

export default HeaderMenu;
