import React from "react";
import { Grid, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {  useLocation } from "react-router-dom";
import onlinePaymenm from "../../asset/Icons/onlinepayment.png";
import { addData } from "../../utils/services";
import { collections, razorpay_key } from "../../firebase/configs";
import { useAuthContext } from "../../context/AuthProvider";
import { removeNullKeys } from "../../utils/helperFunctions";

const PaymentOption = () => {
  const { state } = useLocation();
  const {
    authData: { userData },
    dispatchAuthData,
  } = useAuthContext();

  const [value, setValue] = React.useState("Cash on Delivery");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePay = () => {
    var options = {
      key: razorpay_key,
      amount: 500,
      currency: "INR",
      name: "Ajilda",
      description: "For Testing",
      handler: async function (response) {
        const payload = removeNullKeys({ ...state, payment: value, razorpay: response });
        await addData(collections.ORDERS, payload, userData.uid);
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
        const payload = removeNullKeys({ ...state, payment: value });
        await addData(collections.ORDERS, payload, userData.uid);
      } else {
        handlePay();
      }
    } else {
      dispatchAuthData({ action: "SIGN_OUT" });
    }
  };

  return (
    <Grid sx={{ padding: "60px 80px" }}>
      <center>
        <FormControl>
          <h3>Payment Option</h3>
          <RadioGroup style={{ padding: 30 }} aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
            <Grid container spacing={2} style={{ padding: 20, border: "2px solid #E4E7E9" }}>
              <Grid item style={{ padding: "20px 30px", borderRight: "2px solid #E4E7E9" }}>
                <center>
                  <img alt="onDelivery" src="https://cdn-icons-png.freepik.com/512/5278/5278605.png" style={{ padding: 10 }} width="80" height="80"></img>
                  <h4 style={{ margin: 0 }}>Cash on Delivery</h4>
                  <FormControlLabel style={{ marginLeft: 16 }} value="Cash on Delivery" control={<Radio />} />
                </center>
              </Grid>
              <Grid item style={{ padding: "20px 30px" }}>
                <center>
                  <img alt="payment" src={onlinePaymenm} width="100" height="80" style={{ padding: 10 }}></img>
                  <h4 style={{ margin: 0 }}>Online Payment</h4>
                  <FormControlLabel style={{ marginLeft: 16 }} value="Online Payment" control={<Radio />} />
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
  );
};

export default PaymentOption;
