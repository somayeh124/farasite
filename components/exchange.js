/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PopUp from './popUp';

import useMediaQuery from '@mui/material/useMediaQuery';
function Exchange({ items }) {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleButtonClick = (item) => {
    setSelectedItem(item);
    setIsPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex items-center justify-center min-h-full   bg-white">
      <Box className="md:mt-52 mt-32 md:space-y-48  space-y-32 md:mb-28 mb-16 px-20"  textAlign="center" width="100%" height="100%">
        {items.map((item, index) => (
          <Box id={item.Title}   key={item.id}
           mb={6} mt={index === 0 ? 4 : 0}>
            <Typography   fontSize={isMobile ? "30px" : "40px"} variant="h4" color="textPrimary" fontWeight="bold">
              {item.Title}
            </Typography>
            <Box mt={4}>
              <Box
                display="flex"
                alignItems="center"
                flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
                gap={10}
              >
                <Box
                  flexGrow={0.5}
                  display="flex"
                  textAlign={index % 2 === 0 ? "left" : "right"}
                  flexDirection="column"
                >
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    fontWeight="bolder"
                    fontSize={isMobile ? "20px" : "30px"}
                    textAlign="right"
                    mb={3}
                  >
                    {item.Title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="textPrimary"
                    fontWeight="normal"
                    fontSize={isMobile ? "15px" : "25px"}
                    textAlign="right"
                    width="800"
                  >
                    {item.Discription}
                  </Typography>

                  <button
                    onClick={() => handleButtonClick(item)}
                    className="w-32 mt-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none font-bold"
                  >
                    اطلاعات بیشتر
                  </button>
                </Box>
                <div className='w-32'>
                  <img
                    src={item.Photo}
                    alt={item.Title}

                   
                  />
                </div>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      {isPopUpVisible && (
        <PopUp onClose={handleClosePopUp} productTitle={selectedItem.Title} />
      )}
    </div>
  );
}

Exchange.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Discription: PropTypes.string.isRequired,
      Photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Exchange;


