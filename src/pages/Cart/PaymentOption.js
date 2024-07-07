import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useLocation, useNavigate } from "react-router-dom";
import onlinePaymenm from "../../asset/Icons/onlinepayment.png";
import { addData, updateData } from "../../utils/services";
import {
  ORDER_STATUS,
  collections,
  razorpay_key,
} from "../../firebase/configs";
import { useAuthContext } from "../../context/AuthProvider";
import { removeNullKeys } from "../../utils/helperFunctions";
import Loader from "../../components/Loader";
import routes from "../../utils/routes.json";
import moment from "moment";

const PaymentOption = () => {
  const { state } = useLocation();
  const {
    authData: { userData },
    dispatchAuthData,
  } = useAuthContext();
  const navigate = useNavigate();

  const [value, setValue] = React.useState("Cash on Delivery");
  const [loader, setLoader] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const updateOrders = async (cartId) => {
    const orders = [...state?.orders];
    for (let i = 0; i < orders.length; i++) {
      const orderData = orders[i];
      const id = orderData?.orderInfo?.id;
      const customData = { ...orderData };
      delete customData.image;
      delete customData.name;
      delete customData.orderInfo;
      delete customData.productInfo;
      await updateData(
        collections.ORDERS,
        {
          ...customData,
          status: ORDER_STATUS.ORDERED,
          placedOn: moment().format("DD/MM/YYYY"),
          cartId
        },
        id,
        userData?.uid,
      );
    }
  };

  const handlePay = () => {
    var options = {
      key: razorpay_key,
      amount: parseInt(state?.total) * 100,
      currency: "INR",
      name: "Ajilda",
      description: "For Testing",
      handler: async function (response) {
        setLoader(true);
        const payload = removeNullKeys({
          ...state,
          paymentMode: value,
          razorpay: response,
        });
        const data = await addData(collections.CART, payload, userData.uid);
        await updateOrders(data.id);
        dispatchAuthData({ action: "CART_TRIGGER" });
        setLoader(false);
        navigate(
          `../${routes.response}?message=Your order is successfully placed&desc=Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.`,
          { replace: true }
        );
      },
      prefill: {
        name: state.fullName,
        email: state.email,
        contact: state.phoneNumber,
      },
      theme: {
        color: "#56642E",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  const handleCheckout = async () => {
    if (userData?.uid) {
      if (value === "Cash on Delivery") {
        setLoader(true);
        const payload = removeNullKeys({ ...state, paymentMode: value });
        const data = await addData(collections.CART, payload, userData.uid);
        await updateOrders(data.id);
        dispatchAuthData({ action: "CART_TRIGGER" });
        setLoader(false);
        navigate(
          `../${routes.response}?message=Your order is successfully placed&desc=Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.`,
          { replace: true }
        );
      } else {
        handlePay();
      }
    } else {
      dispatchAuthData({ action: "SIGN_OUT" });
    }
  };

  return (
    <>
      {loader && <Loader />}
      <Grid sx={{ padding: "60px 80px" }}>
        <center>
          <FormControl>
            <h3>Payment Option</h3>
            <RadioGroup
              style={{ padding: 30 }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <Grid
                container
                spacing={2}
                style={{ padding: 20, border: "2px solid #E4E7E9" }}
              >
                <Grid
                  item
                  style={{
                    padding: "20px 30px",
                    borderRight: "2px solid #E4E7E9",
                  }}
                >
                  <center>
                    <img
                      alt="onDelivery"
                      src="https://cdn-icons-png.freepik.com/512/5278/5278605.png"
                      style={{ padding: 10 }}
                      width="80"
                      height="80"
                    ></img>
                    <h4 style={{ margin: 0 }}>Cash on Delivery</h4>
                    <FormControlLabel
                      style={{ marginLeft: 16 }}
                      value="Cash on Delivery"
                      control={<Radio />}
                    />
                  </center>
                </Grid>
                <Grid item style={{ padding: "20px 30px" }}>
                  <center>
                    <img
                      alt="payment"
                      src={onlinePaymenm}
                      width="100"
                      height="80"
                      style={{ padding: 10 }}
                    ></img>
                    <h4 style={{ margin: 0 }}>Online Payment</h4>
                    <FormControlLabel
                      style={{ marginLeft: 16 }}
                      value="Online Payment"
                      control={<Radio />}
                    />
                  </center>
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          <br />
          <Button
            variant="contained"
            onClick={() => {
              handleCheckout();
            }}
            fullWidth
            style={{ margin: "20px 0px", width: 200 }}
          >
            Check out
          </Button>
        </center>
      </Grid>
    </>
  );
};

export default PaymentOption;
