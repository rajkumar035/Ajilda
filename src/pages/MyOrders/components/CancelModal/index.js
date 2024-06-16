import React from "react";
import { useStyles } from "../../styles";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import routes from "../../../../utils/routes.json";
import { updateData } from "../../../../utils/services";
import { ORDER_STATUS, collections } from "../../../../firebase/configs";
import { useAuthContext } from "../../../../context/AuthProvider";
import { useSnackbarContext } from "../../../../context/SnackbarProvider";

const CancelModal = (props) => {
  const { data } = props;
  const {
    authData: { userData },
    dispatchAuthData,
  } = useAuthContext();
  const { dispatchSnackbarData } = useSnackbarContext();
  const classes = useStyles();
  const navigate = useNavigate();
  const reason = ["Found this product at a better price", "Item no longer needed", "Ordered by mistake", "Delivery taking too long"];

  const cancelOrder = async (reason) => {
    if (userData?.uid) {
      const customData = { ...data };
      if (customData?.productDetails) {
        delete customData.productDetails;
      }
      customData["status"] = ORDER_STATUS.CANCELLED;
      customData["cancelled"] = {
        reason: reason,
      };
      try {
        await updateData(collections.ORDERS, customData, customData.info.id, userData?.uid);
        navigate(`../${routes.response}?message=${encodeURIComponent("Order Cancelled")}&desc=${encodeURIComponent("Any amount withdrawn will be debited to your account within 3 business days.")}`, { replace: true });
      } catch (err) {
        dispatchSnackbarData({ action: "UPDATE", payload: { message: "Something went wrong!", severity: "error", open: true } });
      }
    } else {
      dispatchAuthData({ action: "SIGN_OUT" });
    }
  };

  return (
    <>
      <Box component={"div"} className={classes.flexColumn} gap={"24px"}>
        <Box component={"div"} className={classes.flexColumn} gap={"12px"}>
          <Typography variant="largeExtraBold" component={"h6"} color={"#0F1405"}>
            Reason for cancellation
          </Typography>
          <Typography variant="smallThin" component={"h6"} color={"#676C5A"}>
            Please let us know why you would like to cancel!
          </Typography>
        </Box>
        <Box component={"div"} className={classes.flexColumn} width={"100%"}>
          {reason.map((items, index) => {
            return (
              <Box sx={{ cursor: "pointer" }} component={"div"} padding={"10px 0px"} className={classes.flexCenter} justifyContent={"space-between"} borderBottom={reason.length === index + 1 ? "none" : "1px solid #E8E8E8"} key={index}>
                <Typography variant="mediumThin" component={"h6"} color={"#0F1405"}>
                  {items}
                </Typography>
                <IconButton
                  onClick={async () => {
                    await cancelOrder(items);
                  }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default CancelModal;
