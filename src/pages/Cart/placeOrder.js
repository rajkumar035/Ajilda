import React from "react";
import { Grid, TextField, Button, Divider } from "@mui/material";
import placeOrder1 from "../../assets/SVG's/placeOrder1.jpeg";
import placeOrder2 from "../../assets/SVG's/placeOrder2.jpeg";
import EastIcon from "@mui/icons-material/East";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const products = [
    {
      image: placeOrder1,
      name: "Goat milk soap 350gm",
      price: "1",
    },
    {
      image: placeOrder2,
      name: "Hair oil 300ml",
      price: "1",
    },
  ];
  return (
    <Grid container sx={{ padding: "10px 80px" }} spacing={2}>
      <Grid item md={7}>
        <h4>Contact</h4>
        <TextField
          id="outlined-basic"
          label="Email  ID"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#56642E",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#56642E",
            },
          }}
        />
        <h4>
          Having an account?{" "}
          <a href="/" style={{ color: "#56642E" }}>
            Login
          </a>
        </h4>
        <h4 style={{ marginTop: "80px" }}>Billing Information</h4>
        <Grid container>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              sx={{
                margin: "10px 0px",
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#56642E",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#56642E",
                },
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              sx={{
                margin: "10px 0px",
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#56642E",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#56642E",
                },
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              label="Zip Code"
              variant="outlined"
              sx={{
                margin: "10px 0px",
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#56642E",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#56642E",
                },
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              sx={{
                margin: "10px 0px",
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#56642E",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#56642E",
                },
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              sx={{
                margin: "10px 0px",
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#56642E",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#56642E",
                },
              }}
            />
          </Grid>
        </Grid>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          sx={{
            margin: "10px 0px 30px 0px",
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#56642E",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#56642E",
            },
          }}
          fullWidth
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: "#56642E",
                  "&.Mui-checked": {
                    color: "#56642E",
                  },
                }}
              />
            }
            label="Save this information for next time"
          />
        </FormGroup>
      </Grid>
      <Grid item md={5}>
        <div
          style={{
            border: "1px solid #E8E8E8",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <h4 style={{ padding: "0px 0px 0px 30px" }}>Order Summary</h4>
          <Divider variant="middle" />
          {products.map((product, index) => (
            <Grid key={index} container>
              <Grid
                item
                md={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={product.image} alt={`purchased product ${index}`} width="60px" height="60px" style={{ borderRadius: "10px" }} />
              </Grid>
              <Grid item md={9}>
                <h4>{product.name}</h4>
                <h4>
                  {product.price} x <span style={{ color: "#56642E", marginLeft: "2px" }}>$ 299</span>
                </h4>
              </Grid>
            </Grid>
          ))}
          <Divider variant="middle" />
          <div style={{ padding: "10px 30px" }}>
            <Grid container>
              <Grid item md={8}>
                <h4 style={{ fontWeight: "300" }}>Subtotal</h4>
                <h4 style={{ fontWeight: "300" }}>Subtotal</h4>
                <h4 style={{ fontWeight: "300" }}>Subtotal</h4>
                <h4 style={{ fontWeight: "300" }}>Subtotal</h4>
              </Grid>
              <Grid item md={4} sx={{ textAlign: "end" }}>
                <h4>₹70</h4>
                <h4>free</h4>
                <h4>₹24</h4>
                <h4>₹94</h4>
              </Grid>
            </Grid>
            <Divider />
            <Grid container>
              <Grid item md={8}>
                <h4>Total</h4>
              </Grid>
              <Grid item md={4} sx={{ textAlign: "end" }}>
                <h4>₹94</h4>
              </Grid>
            </Grid>
            <Link to={`/cart/payment-option`} style={{ textDecoration: "none" }}>
              <Button variant="contained" fullWidth style={{ margin: "20px 0px" }}>
                Place Order &nbsp;
                <EastIcon />
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default PlaceOrder;
