import React from "react";
import { Grid, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import onlinePaymenm from "../../assets/Icons/onlinepayment.png";
const PaymentOption = () => {
  const [value, setValue] = React.useState("Cash on Delivery");
  const handleChange = (event) => {
    setValue(event.target.value);
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
                  <img src="https://cdn-icons-png.freepik.com/512/5278/5278605.png" style={{ padding: 10 }} width="80" height="80"></img>
                  <h4 style={{ margin: 0 }}>Cash on Delivery</h4>
                  <FormControlLabel style={{ marginLeft: 16 }} value="Cash on Delivery" control={<Radio />} />
                </center>
              </Grid>
              <Grid item style={{ padding: "20px 30px" }}>
                <center>
                  <img src={onlinePaymenm} width="100" height="80" style={{ padding: 10 }}></img>
                  <h4 style={{ margin: 0 }}>Online Payment</h4>
                  <FormControlLabel style={{ marginLeft: 16 }} value="Online Payment" control={<Radio />} />
                </center>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        <br/>
        <Link to={`/cart/payment-successfully`} style={{ textDecoration: "none" }}>
          <Button variant="contained" fullWidth style={{ margin: "20px 0px", width:200}}>
            Check out
          </Button>
        </Link>
      </center>
    </Grid>
  );
};

export default PaymentOption;
