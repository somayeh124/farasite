import { Typography } from "@material-tailwind/react";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";

const Proud = ({ item }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "3.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4c51bf",
      }}
    >
      {item && item.length > 0 && (
        <Box sx={{ marginTop: "2.5rem", width: "100%" }}>
          {item.map((element, idx) => (
            <Box key={idx}>
              <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                <Typography variant="h3" style={{ color: "#ffffff" }}>
                  {element.Title}
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "2.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className="text-8xl"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  {element.Number}
                </Typography>
                <Chip
                  sx={{
                    marginLeft: "20px",
                    padding: "2px",
                    marginTop: "30px",
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "18px",
                  }}
                  label={element.Little}
                />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

Proud.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Number: PropTypes.string.isRequired,
      Little: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Proud;
