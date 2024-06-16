import React, { useEffect, useState } from "react";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Typography, TextField, Button, Divider } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import { deleteData, getData } from "../../utils/services";
import { collections } from "../../firebase/configs";
import { useAuthContext } from "../../context/AuthProvider";
import Loader from "../../components/Loader";
import routes from "../../utils/routes.json";

const Cart = () => {
  const {
    authData: { userData, cartData },
    dispatchAuthData,
  } = useAuthContext();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const handleDelete = async (data) => {
    if (userData?.uid) {
      await deleteData(collections.ORDERS, data.id, userData?.uid);
      dispatchAuthData({ action: "CART_TRIGGER" });
      setTrigger(trigger + 1);
    } else {
      dispatchAuthData({ action: "SIGN_OUT" });
    }
  };

  const handleQuantityChange = (index, operation) => {
    const newCartItems = [...cartItems];
    const item = newCartItems[index];
    if (operation === "increment") {
      item.quantity += 1;
    } else if (operation === "decrement" && item.quantity > 1) {
      item.quantity -= 1;
    }
    newCartItems[index] = item;
    setCartItems(newCartItems);
  };

  const handleApplyCoupon = () => {
    if (couponCode === "Ajay12345") {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
      alert("Applied Coupon is not found");
    }
  };

  useEffect(() => {
    const getCarts = async () => {
      const carts = [];
      setLoader(true);
      const orders = cartData;
      const products = await getData(collections.PRODUCTS);

      if (orders.length > 0 && products.length > 0) {
        for (let i = 0; i < orders.length; i++) {
          const orderData = orders[i];
          for (let j = 0; j < products.length; j++) {
            const productData = products[j];
            if (orderData?.product === productData?.info?.id) {
              carts.push({
                ...orderData,
                product: productData?.product?.name,
                quantitySize: "150ml",
                price: `₹${productData?.product?.price?.newprice}`,
                discountedPrice: `₹${productData?.product?.price?.oldprice}`,
                img: productData?.product?.image[0],
              });
            }
          }
        }
      }
      setCartItems(carts);
      setLoader(false);
    };

    getCarts();
  }, [userData, trigger, cartData]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace("₹", "")) * item.quantity;
    }, 0);
  };

  const calculateDiscount = () => {
    return 0;
  };

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount();
  const couponDiscount = couponApplied ? 100 : 0;
  const total = subtotal - discount - couponDiscount;

  return (
    <>
      {loader && <Loader />}
      <Grid container sx={{ padding: "60px 100px" }} spacing={2}>
        <Grid item md={7}>
          <div style={{ border: "1px solid #E8E8E8", borderRadius: "10px" }}>
            <h4 style={{ padding: "0px 0px 0px 10px" }}>Shopping Cart</h4>
            <TableContainer>
              <Table>
                <TableHead sx={{ background: "#F6F2EA" }}>
                  <TableRow>
                    <TableCell>Products</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Grid container>
                          <Grid
                            item
                            md={1}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <IconButton
                              onClick={async () => {
                                await handleDelete(item.info);
                              }}
                            >
                              <CancelOutlinedIcon />
                            </IconButton>
                          </Grid>
                          <Grid
                            item
                            md={4}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img src={item?.img} alt="product_image" width="60px" />
                          </Grid>
                          <Grid item md={7}>
                            <p>{item.product}</p>
                            <p>{item.quantitySize}</p>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <span style={{ color: "grey" }}>{item.discountedPrice}</span>
                        &nbsp;
                        <span>{item.price}</span>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #000",
                            borderRadius: "10px",
                            width: "100px",
                          }}
                        >
                          <IconButton onClick={() => handleQuantityChange(index, "decrement")}>
                            <RemoveIcon />
                          </IconButton>
                          <span>{item.quantity}</span>
                          <IconButton onClick={() => handleQuantityChange(index, "increment")}>
                            <AddIcon />
                          </IconButton>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Typography>₹{(parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
        <Grid item md={5}>
          <div
            style={{
              border: "1px solid #E8E8E8",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              marginBottom: "30px",
            }}
          >
            <h4 style={{ padding: "0px 0px 0px 30px" }}>Coupon Code</h4>
            <Divider />
            <div style={{ padding: "13px 30px" }}>
              <TextField
                id="outlined-basic"
                label="Apply Coupon"
                variant="outlined"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#56642E",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#56642E",
                  },
                }}
                fullWidth
              />
              <Button variant="contained" fullWidth style={{ margin: "20px 0px", padding: 8 }} onClick={handleApplyCoupon}>
                Apply Coupon
              </Button>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #E8E8E8",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <h4 style={{ padding: "0px 0px 0px 30px" }}>Card Total</h4>
            <Divider />
            <div style={{ padding: "10px 30px" }}>
              <Grid container>
                <Grid item md={8}>
                  <h4 style={{ fontWeight: "300" }}>Subtotal</h4>
                  <h4 style={{ fontWeight: "300" }}>Shipping</h4>
                  <h4 style={{ fontWeight: "300" }}>Discount</h4>
                  <h4 style={{ fontWeight: "300" }}>Tax</h4>
                  {couponApplied && <h4 style={{ fontWeight: "300" }}>Coupon Discount</h4>}
                </Grid>
                <Grid item md={4} sx={{ textAlign: "end" }}>
                  <h4>₹{subtotal.toFixed(2)}</h4>
                  <h4>free</h4>
                  <h4>₹{discount.toFixed(2)}</h4>
                  <h4>-</h4>
                  {couponApplied && <h4>-₹{couponDiscount.toFixed(2)}</h4>}
                </Grid>
              </Grid>
              <Divider />
              <Grid container>
                <Grid item md={8}>
                  <h4>Total</h4>
                </Grid>
                <Grid item md={4} sx={{ textAlign: "end" }}>
                  <h4>₹{total.toFixed(2)}</h4>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                fullWidth
                style={{ margin: "20px 0px" }}
                onClick={() => {
                  navigate(`/${routes.cart}/place-order`, { state: { subTotal: subtotal.toFixed(2), total: total.toFixed(2) } });
                }}
              >
                Proceed to checkout &nbsp;
                <EastIcon />
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
