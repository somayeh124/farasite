/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const BasketManagement = ({ item ,title}) => {

  return (
    <div className="flex items-center bg-white justify-center min-h-screen py-40">
      <Box textAlign="center" width="90%" maxWidth="1200px" mx="auto">
          <Box mb={8}>
            <Typography
              variant="h3"
              color="textPrimary"
              fontWeight="bold"
              fontSize={{ xs: "2rem", sm: "2rem", md: "2rem", lg: "2rem" }}
              mb={{ xs: 2, md: 4 }}
              id={title}
            >
              {title}
            </Typography>
            <Box mt={5}>
              {item.map((box, idx) => (
                <Grid
                  container
                  key={idx}
                  alignItems="center"
                  spacing={{ xs: 4, md: 6 }}
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: idx % 2 === 0 ? "row" : "row-reverse",
                  }}
                >
                  <Grid item xs={12} md={6}>
                    <Box
                      px={{ xs: 2, sm: 4 }}
                      textAlign={{ xs: "center", md: "right" }}
                      mb={{ xs: 4, sm: 5, md: 0 }}
                    >
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        fontWeight="bolder"
                        fontSize={{ xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }}
                        mb={{ xs: 1, md: 2 }}
                      >
                        {box.Title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        fontWeight="normal"
                        fontSize={{ xs: "0.875rem", md: "1rem" }}
                        maxWidth="700px"
                        mx="auto"
                      >
                        {box.Description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" py={{ xs: 2, md: 3 }}>
                      <img
                        src={box.Photo}
                        alt={box.Title}
                        width="100%"
                        style={{ maxWidth: "800px" }}
                      />
                    </Box> 
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Box>
      </Box>
    </div>
  );
};

BasketManagement.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  title:PropTypes.string
};

export default BasketManagement;
