import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Testimonial1 from "../../Assets/PNG's/Testimonials.png";
import Success from "../../Assets/Icons/successCircle.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cardLayout: {
    position: "relative",
    background: `url(${Testimonial1})`,
    width: "100%",
    height: "500px",
    backgroundSize: "cover",
    boxShadow: "inset 0rem -14rem 7rem -7rem rgba(0, 0, 0, 0.6)",
    borderRadius: "12px",
  },
  cardBody: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    position: "absolute",
    bottom: "18px",
    left: "24px",
  },
  cardTitle: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  seperator: {
    height: "16px",
    width: "1px",
    background: "#8C8C8C",
  },
}));

const TestimonialCards = () => {
  const classes = useStyles();

  return (
    <Box component={"div"} className={classes.cardLayout}>
      <Box component={"div"} className={classes.cardBody}>
        <Typography className={classes.cardTitle} component={"h6"}>
          Christina Smith
        </Typography>
        <StarIcon sx={{ color: "#FFC300", height: "22px" }} />
        <Typography component={"label"} variant="largeRegular" color={"#FFFFFF"}>
          4.5
        </Typography>
        <Box component={"div"} className={classes.seperator} />
        <Box component={"img"} height={"22px"} width={"auto"} src={Success} className="img-contains" />
      </Box>
    </Box>
  );
};

export default TestimonialCards;
