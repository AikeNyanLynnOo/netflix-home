import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function MyAccordion({ title, subTitle }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleExpansion}
      sx={{
        textAlign: "left",
      }}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <CloseIcon sx={{ color: "#FFFFFF" }} />
          ) : (
            <AddIcon sx={{ color: "#FFFFFF" }} />
          )
        }
        sx={{
          backgroundColor: "#454545",
          py: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "#FFFFFF",
          }}
        >
          {title || ""}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          py: 2,
          backgroundColor: "#232323",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "#FFFFFF",
          }}
        >
          {subTitle || ""}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default MyAccordion;
