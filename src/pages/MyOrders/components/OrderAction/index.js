import React, { useState } from "react";
import { tabStateLabel } from "../..";
import { useStyles } from "../../styles";
import { Box, Button, Typography } from "@mui/material";
import { addData } from "../../../../utils/services";
import { ORDER_STATUS, collections } from "../../../../firebase/configs";
import { useAuthContext } from "../../../../context/AuthProvider";
import { useSnackbarContext } from "../../../../context/SnackbarProvider";
import Loader from "../../../../components/Loader";

const OrderAction = (props) => {
  const { mode, handleCancelModal, handleExchangeModal, data } = props;
  const classes = useStyles();
  const { authData, dispatchAuthData } = useAuthContext();
  const { dispatchSnackbarData } = useSnackbarContext();
  const [loading, setLoading] = useState(false);

  const handleReorder = async () => {
    try {
      setLoading(true);
      const payload = {
        product: data?.product,
        quantity: data?.quantity,
        status: ORDER_STATUS.ADDED,
      };
      await addData(collections.ORDERS, payload, authData?.userData?.uid);
      dispatchAuthData({ action: "CART_TRIGGER" });
      dispatchSnackbarData({
        action: "UPDATE",
        payload: {
          message: "Re-ordered, go to cart!",
          severity: "success",
          open: true,
        },
      });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const MainComponent = () => {
    switch (mode) {
      case tabStateLabel[0]:
        return (
          <Box
            component={"div"}
            className={`${classes.flexColumn} ${classes.actionContainer}`}
          >
            <Button
              variant="contained"
              color="success"
              className="custom-btn"
              fullWidth
              onClick={() => {
                handleCancelModal();
              }}
            >
              Cancel order
            </Button>
            <Typography variant="smallThin" color={"#6B6B6B"} component={"h6"}>
              (Cancel within 24 hours)
            </Typography>
          </Box>
        );
      case tabStateLabel[1]:
        return (
          <Box
            component={"div"}
            className={`${classes.flexColumn} ${classes.actionContainer}`}
          >
            <Box component={"div"} className={classes.flexCenter} gap={"18px"}>
              <Button
                variant="contained"
                color="info"
                fullWidth
                disabled={data?.status === ORDER_STATUS.EXCHANGE}
                className="custom-btn"
                onClick={() => {
                  handleExchangeModal();
                }}
              >
                Exchange
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={data?.status === ORDER_STATUS.EXCHANGE}
                className="custom-btn"
                onClick={() => {
                  handleReorder();
                }}
              >
                Reorder
              </Button>
            </Box>
            <Typography variant="smallThin" color={"#6B6B6B"} component={"h6"}>
              Reorder to repeat your purchase
            </Typography>
          </Box>
        );
      case tabStateLabel[2]:
        return (
          <Box
            component={"div"}
            className={`${classes.flexColumn} ${classes.actionContainer}`}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="custom-btn"
              sx={{ maxWidth: "120px" }}
              onClick={() => {
                handleReorder();
              }}
            >
              Reorder
            </Button>
            <Typography variant="smallThin" color={"#6B6B6B"} component={"h6"}>
              Reorder to repeat your purchase
            </Typography>
          </Box>
        );
      default:
        break;
    }
  };

  return (
    <>
      {loading && <Loader />}
      <MainComponent />
    </>
  );
};

export default OrderAction;
