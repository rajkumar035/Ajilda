import { Box, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import Product from "../../../../asset/Images/Product.jfif";
import { useStyles } from "../../styles";
import { useNavigate } from "react-router-dom";
import routes from "../../../../utils/routes.json";
import ExchangeModal from "../ExchangeModal";
import CancelModal from "../CancelModal";
import OrderAction from "../OrderAction";
import GetStatus from "../Others";
import DeliveryStatus from "../DeliveryStatus";
import { shrinkTextBased } from "../../../../utils/helperFunctions";

const OrderCards = (props) => {
  const { mode, data, navigateState = true } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const [cancelModal, setCancelModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);

  const handleCancelModal = () => {
    setCancelModal(!cancelModal);
  };

  const handleExchangeModal = () => {
    setExchangeModal(!exchangeModal);
  };

  return (
    <>
      {/* Cancel Dialog */}
      <Dialog
        open={cancelModal}
        onClose={() => {
          handleCancelModal();
        }}
      >
        <CancelModal data={data} />
      </Dialog>

      {/* Exchange Dialog */}
      <Dialog
        open={exchangeModal}
        onClose={() => {
          handleExchangeModal();
        }}
      >
        <ExchangeModal data={data} handleExchangeModal={handleExchangeModal} />
      </Dialog>

      <Box component={"div"} className={classes.orderCardLayout}>
        <Box
          component={"div"}
          sx={{ cursor: "pointer" }}
          className={classes.flexCenter}
          gap={"28px"}
          onClick={() => {
            if (navigateState) {
              navigate(`/${routes.orderDetails}/${data.info.id}`, {
                state: { mode: mode, data: data },
              });
            }
          }}
        >
          <Box
            component={"img"}
            src={Product}
            className={classes.productImage}
          />
          <Box component={"div"} className={classes.flexColumn} gap={"18px"}>
            <Box component={"div"} className={classes.flexCenter} gap={"12px"}>
              <Typography
                variant="smallRegular"
                color={"#6B6B6B"}
                component={"h6"}
              >
                Order ID
              </Typography>
              <Typography
                variant="smallRegular"
                color={"#0F1405"}
                component={"h6"}
              >
                {data.info.id}
              </Typography>
            </Box>
            <Typography
              variant="largeExtraBold"
              color={"#192108"}
              component={"h6"}
            >
              {data.productDetails.product.name}
            </Typography>
            <Typography
              variant="smallThin"
              color={"#6B6B6B"}
              maxWidth={"250px"}
              component={"h6"}
            >
              {shrinkTextBased(75, data.productDetails.product.description)}
            </Typography>
            <Box component={"div"} className={classes.flexCenter} gap={"36px"}>
              <Box
                component={"div"}
                className={classes.flexCenter}
                gap={"12px"}
              >
                <Typography
                  variant="mediumRegular"
                  color={"#6B6B6B"}
                  component={"h6"}
                >
                  Qty
                </Typography>
                <Typography
                  variant="mediumRegular"
                  color={"#0F1405"}
                  component={"h6"}
                >
                  {data.quantity}
                </Typography>
              </Box>
              <Typography
                variant="mediumRegular"
                color={"#0F1405"}
                component={"h6"}
              >
                {data.price}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box component={"div"} className={classes.flexColumn} gap={"18px"}>
          <Typography variant="mediumThin" color={"#6B6B6B"} component={"h6"}>
            Status
          </Typography>
          <GetStatus data={data} mode={mode} />
        </Box>
        <DeliveryStatus mode={mode} />
        <OrderAction
          mode={mode}
          handleExchangeModal={handleExchangeModal}
          handleCancelModal={handleCancelModal}
          data={data}
        />
      </Box>
    </>
  );
};

export default OrderCards;
