import React, { useState } from "react";
import Image from "next/image";
import { domin, onRun } from "@/api/config";
import idIcon from "../images/id-card-solid.svg";
import phoneIcon from "../images/phone-solid.svg";
import axios from "axios";

const PopUp = ({ onClose, productTitle }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [subject, setSubject] = useState("بورس");
  const [error, setError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (telephone.length < 11) {
      setError("شماره تماس باید 11 رقم باشد.");
      return;
    }

    const data = {
      Domain: domin,
      Name: name,
      Telephone: telephone,
      Subject: productTitle,
    };

    try {

      await axios.post(`${onRun}/Subscription/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsAlertVisible(true);
      setError(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        error.response
          ? error.response.data
          : "با موفقیت ارسال شد با شما تماس می گیریم"
      );
    }
  };

  const handleAlertClose = () => {
    setIsAlertVisible(false);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[\u0600-\u06FF\sA-Za-z]*$/.test(value)) {
      setName(value);
    }
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 11) {
      setTelephone(value);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div dir="rtl" className="relative bg-white rounded-lg shadow">
          <div className="flex flex-col justify-between p-4 md:p-4 border-b-2 border-indigo-200 rounded-t bg-gradient-to-r from-purple-50 to-indigo-100">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-indigo-800">
                {productTitle}
              </h3>
              <button
                type="button"
                className="rounded-full text-indigo-800 hover:text-white hover:bg-indigo-800 transition-colors duration-200 p-2"
                onClick={onClose}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            {/* <p className="text-base mt-2 text-gray-700">
              صندوق های سرمایه گذاری
            </p> */}
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-12">
                <div className="border-b-2 border-indigo-200 pb-14">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <div className="flex items-center hover:scale-105 duration-300">
                        <Image
                          src={idIcon}
                          alt="ID card icon"
                          width={25}
                          height={25}
                          className="ml-1 opacity-25"
                        />
                        <input
                          type="text"
                          id="name"
                          className="block w-full shadow-2xl max-w-xs px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border-2 border-indigo-200 rounded-full placeholder-gray-500 focus:outline-none leading-relaxed"
                          placeholder="نام"
                          required
                          value={name}
                          onChange={handleNameChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <div className="flex items-center hover:scale-105 duration-300">
                        <Image
                          src={phoneIcon}
                          alt="Phone icon"
                          width={25}
                          height={25}
                          className="ml-1 opacity-25"
                        />
                        <input
                          type="text"
                          id="telephone"
                          className="block w-full shadow-2xl max-w-xs px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border-2 border-indigo-200 rounded-full placeholder-gray-500 focus:outline-none leading-relaxed"
                          placeholder="شماره تماس"
                          required
                          value={telephone}
                          onChange={handleTelephoneChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {error && <p className="text-green-600">{error}</p>}

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-red-600 hover:scale-105"
                  onClick={onClose}
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-3 py-2 bg-indigo-500 hover:bg-green-400 text-white duration-300 rounded-xl shadow-2xl"
                >
                  مرحله بعد
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isAlertVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-md w-full mx-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-indigo-800">اطلاعیه</h2>
              <button
                type="button"
                className="rounded-full text-red-600 hover:text-white hover:bg-red-600 transition-colors duration-200 p-2"
                onClick={handleAlertClose}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <p className="text-gray-600">فرم شما با موفقیت ارسال شد!</p>
            <button
              type="button"
              className="w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg"
              onClick={handleAlertClose}
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;



