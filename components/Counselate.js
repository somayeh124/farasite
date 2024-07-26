/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import SvgImage from '../images/Clip path group.svg';
import PropTypes from 'prop-types';

import PopUp from './popUp';

function Counselate({ items }) {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [selecte, setSelecte] = useState(null);

  const handleButtonClick = (i) => {
    setSelecte(i);
    setIsPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
    setSelecte(null);
  };

  return (
    <div className="relative container mx-auto p-6">
      <div className="absolute inset-0 z-0">
        <Image
          src={SvgImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="background"
        />
      </div>
      <div className="relative z-10 flex flex-wrap justify-around mt-24">
        {items.map((item, index) => (
          <div key={index} className="flex gap-8 items-center w-[1000px] space-y-4 m-4 bg-white bg-opacity-90 p-12 rounded shadow">
            <div className='flex flex-col w-[1200px]'>
              <h1 className="text-4xl font-extrabold mb-4">{item.Title}</h1>
              <p className="text-gray-700 mb-4 font-bold mt-4">{item.Discription}</p>
              <button
                onClick={() => handleButtonClick(item)}
                className="w-32 mt-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none font-bold"
              >
                مقایسه و خرید
              </button>
            </div>
            <img
              className="w-40 h-40 mt-6"
              src={item.Photo}
              alt="hero image"
            />
          </div>
        ))}
      </div>
      {isPopUpVisible && (
        <PopUp onClose={handleClosePopUp} productTitle={selecte.Title} />
      )}
    </div>
  );
}

Counselate.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Discription: PropTypes.string.isRequired,
      Photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Counselate;

