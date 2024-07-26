import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import {
  Accordion,
  Typography,
  FormControl,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

const DropDown = ({ tab }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const createMarkup = (html) => {
    const sanitizedHtml = DOMPurify.sanitize(html);
    return { __html: sanitizedHtml };
  };

  return (
    <div style={styles.container}>
      <div style={styles.quizBox}>
        {tab.Contentdrop.map((q, index) => (
          <Accordion
            key={index}
            style={styles.accordion}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{ backgroundColor: "#f9f9f9", boxShadow: 2, borderRadius: 2 }}
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <RiArrowDropUpLine style={styles.icon} />
                ) : (
                  <RiArrowDropDownLine style={styles.icon} />
                )
              }
              sx={{ padding: "0 16px" }}
            >
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
                    {q.Title}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "16px", backgroundColor: "#fff" }}>
              <FormControl component="fieldset">
                <div dangerouslySetInnerHTML={createMarkup(q.Summer)} />
              </FormControl>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
    overflowY: "auto",
  },
  quizBox: {
    width: "100%",
    maxWidth: "1000px",
    textAlign: "right",
  },
  accordion: {
    marginBottom: "15px",
    borderRadius: "8px",
  },
  icon: {
    fontSize: "2rem",
    color: "#1976d2",
  },
};

DropDown.propTypes = {
  tab: PropTypes.shape({
    Contentdrop: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Summer: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DropDown;
