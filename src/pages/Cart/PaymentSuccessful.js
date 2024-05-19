import React from "react";
import { Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import success from "../../assets/Images/success.jpg";
const PaymentSuccessful = () => {
  return (
    <Grid sx={{ padding: "100px 100px" }}>
      <center>
        <Grid style={{ width: "500px" }}>
          <Box component={"img"} src={success} alt="icon" height={"80px"} width={"80px"} />
          <p style={{ fontSize: 24, fontWeight: 500 }}>Your order is successfully place</p>
          <p style={{ fontSize: 16, color: "#676C5A" }}>Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>

          <Grid container spacing={2} style={{ marginLeft: 0 }}>
            <Grid item>
              <Link to={`/products?category=bath%20%26%20body`} style={{ textDecoration: "none" }}>
                <Button variant="contained" fullWidth style={{ margin: "20px 0px", width: 220 }}>
                  Explore other products
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to={`/profile?state=orders`} style={{ textDecoration: "none" }}>
                <Button variant="contained" fullWidth style={{ margin: "20px 0px", width: 220 }}>
                  View order details
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </center>
    </Grid>
  );
};

export default PaymentSuccessful;
