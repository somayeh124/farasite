/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const BrifProperty = ({ title, description, item }) => {
  return (
    <div className="flex items-center bg-white justify-center min-h-76 px-12 mb-9 ">
      <Box textAlign="center">
        <Box>
          <Typography
            variant="h4"
            color="textPrimary"
            fontWeight="bold"
            id={title}
          >
            {title}
          </Typography>
          <Typography variant="subtitle1" color="GrayText">
            {description}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          mt={6}
          mb={4}
        >
          {item.map((box, index) => (
            <Box
              key={index}
              p={2}
              m={1}
              flex="1 1 200px"
              minHeight="150px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <img width="100" height="100" src={box.Photo} alt={box.Title} />
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="bold"
                mt={1}
              >
                {box.Title}
              </Typography>
              <Typography variant="body1" color="GrayText" fontWeight="bold">
                {box.Description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

BrifProperty.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BrifProperty;
