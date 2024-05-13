import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Typography, TextField, Button, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import cart from "../../assets/SVG's/cart.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      product: 'Product Name',
      quantity: '150ml',
      price: '$70',
      discountedPrice: '$99',
      quantity: 1,
      delete: false,
    },
    // Add more products as needed
  ]);
  const handleDelete = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (index, operation) => {
    const newCartItems = [...cartItems];
    const item = newCartItems[index];
    if (operation === 'increment') {
      item.quantity += 1;
    } else if (operation === 'decrement' && item.quantity > 1) {
      item.quantity -= 1;
    }
    item.subtotal = item.quantity * parseFloat(item.discountedPrice);
    newCartItems[index] = item;
    setCartItems(newCartItems);
  };
  return (
    <Grid container sx={{ padding: '10px 80px' }} spacing={2}>
      <Grid item md={7}>
        <div style={{ border: '1px solid #E8E8E8', borderRadius: '10px' }}>
          <h4 style={{ padding: '0px 0px 0px 10px' }}>Shopping Cart</h4>
          <TableContainer>
            <Table>
              <TableHead sx={{ background: '#F6F2EA' }}>
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
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconButton onClick={() => handleDelete(index)}>
                            <CancelOutlinedIcon />
                          </IconButton>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <img src={cart} alt='product image' width='60px' />
                        </Grid>
                        <Grid item md={7}>
                          <p>{item.product}</p>
                          <p>{item.quantity}</p>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>
                      <span style={{ color: 'grey' }}>{item.discountedPrice}</span>
                      &nbsp;
                      <span>{item.price}</span>
                    </TableCell>
                    <TableCell>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid #000',
                          borderRadius: '10px',
                          width: '100px',
                        }}>
                        <IconButton onClick={() => handleQuantityChange(index, 'decrement')}>
                          <RemoveIcon />
                        </IconButton>
                        <span>{item.quantity}</span>
                        <IconButton onClick={() => handleQuantityChange(index, 'increment')}>
                          <AddIcon />
                        </IconButton>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Typography>${item.subtotal}</Typography>
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
            border: '1px solid #E8E8E8',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            marginBottom: '30px',
          }}>
          <h4 style={{ padding: '0px 0px 0px 30px' }}>Coupon Code</h4>
          <Divider />
          <div style={{ padding: '13px 30px' }}>
            <TextField
              id='outlined-basic'
              label='Apply Coupon'
              variant='outlined'
              sx={{
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#56642E',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#56642E',
                },
              }}
              fullWidth
            />
            <Button variant='contained' fullWidth style={{ margin: '20px 0px' }}>
              Apply Coupon
            </Button>
          </div>
        </div>
        <div
          style={{
            border: '1px solid #E8E8E8',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}>
          <h4 style={{ padding: '0px 0px 0px 30px' }}>Card Total</h4>
          <Divider />
          <div style={{ padding: '10px 30px' }}>
            <Grid container>
              <Grid item md={8}>
                <h4 style={{ fontWeight: '300' }}>Subtotal</h4>
                <h4 style={{ fontWeight: '300' }}>Subtotal</h4>
                <h4 style={{ fontWeight: '300' }}>Subtotal</h4>
                <h4 style={{ fontWeight: '300' }}>Subtotal</h4>
              </Grid>
              <Grid item md={4} sx={{ textAlign: 'end' }}>
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
              <Grid item md={4} sx={{ textAlign: 'end' }}>
                <h4>₹94</h4>
              </Grid>
            </Grid>
            <Link to={`/cart/place-order`} style={{ textDecoration: 'none' }}>
              <Button variant='contained' fullWidth style={{ margin: '20px 0px' }}>
                Proceed to checkout &nbsp;
                <EastIcon />
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Cart;
