import { Box, Grid, Step, StepConnector, StepLabel, Stepper, Typography, stepConnectorClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderCards from "../MyOrders/components/OrderCards";
import { useLocation } from "react-router-dom";
import { useStyles } from "./styles";
import { styled } from "@mui/styles";
import { Check } from "@mui/icons-material";
import { getDocument } from "../../utils/services";
import { ORDER_STATUS, collections } from "../../firebase/configs";
import { useAuthContext } from "../../context/AuthProvider";
import Loader from "../../components/Loader";
import moment from "moment";

const OrderDetails = () => {
  const {
    authData: { userData },
  } = useAuthContext();
  const { state } = useLocation();
  const classes = useStyles();

  const returnCurrentStep = (status) => {
    switch (status) {
      case ORDER_STATUS.ORDERED:
        return 0;
      case ORDER_STATUS.DISPATCHED:
        return 1;
      case ORDER_STATUS.DELIVERED:
        return 2;
      default:
        return 0;
    }
  };

  const [cartData, setCartData] = useState();

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#B5B5B5",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#B5B5B5",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 100,
      border: 0,
      width: 1,
      marginLeft: "1px",
      backgroundColor: "#0C0F04",
      borderRadius: 1,
    },
  }));

  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#8EA64C",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#FFFFFF",
      zIndex: 1,
      fontSize: 20,
    },
    "& .QontoStepIcon-completed": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "#8EA64C",
      marginLeft: "10px",
      marginRight: "18px",
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "#0C0F04",
      marginLeft: "10px",
      marginRight: "18px",
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {active ? (
          <Box component={"div"} sx={{ borderRadius: "50%", background: "#8EA64C", height: "36px", width: "36px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginLeft: "-3px", marginRight: "2px" }}>
            <Check className="QontoStepIcon-completedIcon" />
          </Box>
        ) : completed ? (
          <div className="QontoStepIcon-completed" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  useEffect(() => {
    const getCartDetails = async () => {
      const data = await getDocument(collections.CART, state.data.cartId, userData.uid);
      console.log(data, "56y56y");
      setCartData(data);
    };
    console.log(state.data , userData?.uid, "56y56y");
    if (state.data?.cartId && userData?.uid) {
      getCartDetails();
    }
  }, [state.data, userData]);

  return (
    <Box component={"section"} padding={"30px 100px"}>
      <OrderCards mode={state.mode} data={state.data} navigateState={false} />
      {cartData ? (
        <Box component={"div"} paddingTop={"40px"}>
          <Typography color={"#0C0F04"} component={"h6"} variant="largeRegular">
            Order Status
          </Typography>
          <Grid container lg={12} paddingTop={"30px"}>
            <Grid item lg={5} md={6} sm={12}>
              <Stepper activeStep={returnCurrentStep(state.data.status)} orientation="vertical" connector={<ColorlibConnector />}>
                <Step>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    <Box component={"div"} className={classes.flexColumn} gap={"12px"} marginLeft={"30px"}>
                      <Typography variant="mediumExtraBold" color={"#0C0F04"} component={"h6"}>
                        Order Placed on
                      </Typography>
                      <Typography variant="mediumThin" color={"#6B6B6B"} component={"h6"}>
                        Ordered on {moment(state.data.placedOn, "DD/MM/YYYY").format("Do MMMM YYYY")}
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    <Box component={"div"} className={classes.flexColumn} gap={"12px"} marginLeft={"30px"}>
                      <Typography variant="mediumExtraBold" color={"#0C0F04"} component={"h6"}>
                        Order dispatched
                      </Typography>
                      <Typography variant="mediumThin" color={"#6B6B6B"} component={"h6"}>
                        Expected to dispatch on 30th May 2024
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    <Box component={"div"} className={classes.flexColumn} gap={"12px"} marginLeft={"30px"}>
                      <Typography variant="mediumExtraBold" color={"#0C0F04"} component={"h6"}>
                        Expected delivery
                      </Typography>
                      <Typography variant="mediumThin" color={"#6B6B6B"} component={"h6"}>
                        Expected to delivery on 2nd June 2024
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
              </Stepper>
            </Grid>
            <Grid item lg={7} md={6} sm={12}>
              <Box component={"div"} className={classes.flexColumn} gap={"50px"}>
                <Box component={"div"} className={classes.flexColumn} gap={"20px"}>
                  <Typography color={"#0C0F04"} component={"h6"} variant="mediumExtraBold">
                    Delivery address
                  </Typography>
                  <Box component={"div"} className={classes.flexColumn} gap={"12px"}>
                    <Typography color={"#6B6B6B"} component={"h6"} variant="mediumThin">
                      {cartData.billingInformation.address1.details}
                    </Typography>
                    <Typography color={"#6B6B6B"} component={"h6"} variant="mediumThin">
                      {cartData.billingInformation.phoneNumber}
                    </Typography>
                    <Typography color={"#6B6B6B"} component={"h6"} variant="mediumThin">
                      {cartData.billingInformation.email}
                    </Typography>
                  </Box>
                </Box>
                <Box component={"div"} className={classes.flexColumn} gap={"20px"}>
                  <Typography color={"#0C0F04"} component={"h6"} variant="mediumExtraBold">
                    Payment Status
                  </Typography>
                  <Typography color={"#6B6B6B"} component={"h6"} variant="mediumThin">
                    {cartData.paymentMode}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default OrderDetails;
