import React from "react";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { makeStyles } from "@mui/styles";
import bottomLeft from "../../assets/PNG's/4041.png";
import topRight from "../../assets/PNG's/4042.png";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "100vw",
    textAlign: "center",
    overflow: "hidden",
  },
  heading: {
    color: "#C3A570",
    fontSize: "120px",
    margin: "0px",
    fontFamily:"DM Serif Display;"
  },
  content: {
    color: "#192108",
    fontSize:"18px",
    width:"20%",
    margin:"0px 0px 40px 0px"
  },
  topRightImage: {
    position: "absolute",
    top: 0,
    right: 0,
    maxWidth: "350px",
    maxHeight: "350px",
    marginTop: "100px",
  },
  bottomLeftImage: {
    position: "absolute",
    bottom: "-50px",
    left: "-100px",
    maxWidth: "350px",
    maxHeight: "350px",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <img
        src={topRight}
        alt="Top Right Decoration"
        className={classes.topRightImage}
      />
      <img
        src={bottomLeft}
        alt="Bottom Left Decoration"
        className={classes.bottomLeftImage}
      />
      <h1 className={classes.heading}>404</h1>
      <h4 className={classes.content}>
        We are sorry, but the page you requested was not found
      </h4>
      <Button variant="contained">
        Proceed to checkout &nbsp;
        <EastIcon />
      </Button>
    </div>
  );
};

export default NotFound;
