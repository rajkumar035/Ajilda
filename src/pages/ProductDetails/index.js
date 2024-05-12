import React, { useState } from 'react';
import product from './product.json';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import VerifiedIcon from '@mui/icons-material/Verified';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PlaceIcon from '@mui/icons-material/Place';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import image1 from "../../Assets/SVG's/Group 1.svg";
import image2 from "../../Assets/SVG's/Group 2.svg";
import image3 from "../../Assets/SVG's/Group 3.svg";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: '#8EA64C',
  },
  thumbnailContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  thumbnail: {
    width: '90px',
    height: '90px',
    margin: '5px',
    cursor: 'pointer',
    border: `3px solid white`,
  },
  selectedThumbnail: {
    border: `3px solid ${'#8EA64C'}`,
  },
  largeImage: {
    width: '78%',
    height: '100%',
    marginLeft: '20px',
    margin: '5px',
  },
  tags: {
    backgroundColor: '#E0E8CA',
    padding: '10px 18px 10px 18px',
    borderRadius: 30,
    marginRight: 10,
  },
  ratingDivider: {
    color: '#8C8C8C',
    fontSize: 20,
    margin: 0,
    padding: '10px 10px',
  },
  newPrice: {
    fontWeight: 600,
    fontSize: 20,
  },
  oldPrice: {
    fontSize: 16,
    color: '#6B6B6B',
    paddingLeft: 10,
    paddingTop: 3,
    paddingRight: 10,
  },
  button: {
    width: 250,
    backgroundColor: '#56642E',
    padding: 12,
    border: 'none',
    borderRadius: 12,
    color: 'white',
    margin: '10px 10px',
  },
}));

const ProductDetails = () => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(product?.product?.image?.['0']);
  const tagsArray = Object.values(product?.product?.tags || {});
  const highlight = Object.values(product?.product?.highlight || {});
  const keyIngredients = Object.values(product?.keyIngredients || {});
  const WhyShouldBuy = Object.values(product?.WhyShouldBuy || {});
  const oldPrice = parseFloat(product?.product?.price?.oldprice);
  const newPrice = parseFloat(product?.product?.price?.newprice);
  const percentageDiscount = ((oldPrice - newPrice) / oldPrice) * 100;
  const [count, setCount] = useState(1);
  const steps = ['Cleanser', 'Serum', 'Night Cream', 'Toner', 'Moisturizer'];
  const currentStep = product?.whenToUse?.tag;
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  console.log(product?.WhyShouldBuy, 'WhyShouldBuy');
  return (
    <div>
      <div style={{ padding: '50px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12} lg={6}>
            <div style={{ display: 'flex' }}>
              <div className={classes.thumbnailContainer}>
                {Object.keys(product.product.image).map((key) => (
                  <img key={key} src={product.product.image[key]} alt='Check' className={`${classes.thumbnail} ${selectedImage === product.product.image[key] ? classes.selectedThumbnail : ''}`} onClick={() => setSelectedImage(product.product.image[key])} />
                ))}
              </div>
              <img src={selectedImage} alt='Check' className={classes.largeImage} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={12} lg={6} style={{ height: '90vh', overflow: 'scroll' }}>
            {/* Product Name and tags*/}
            <Grid container>
              <Grid item>
                <h2>{product?.product?.name}</h2>
              </Grid>
              <Grid style={{ marginTop: 25, paddingLeft: 20 }} item>
                <span>
                  {tagsArray.map((item, index) => (
                    <span item xs={2} sm={4} md={4} key={index}>
                      <span className={classes.tags}>{item}</span>
                    </span>
                  ))}
                </span>
              </Grid>
            </Grid>
            {/* Rating */}
            <Grid container>
              <Grid item>
                <Stack spacing={1}>
                  <Grid container alignItems='center'>
                    <Grid item>
                      <Rating name='half-rating-read' style={{ color: '#faaf00' }} defaultValue={4.5} precision={0.5} readOnly />
                    </Grid>
                    <Grid item style={{ fontSize: 'larger', paddingLeft: 5, display: 'flex', alignItems: 'center' }}>
                      4.5<b className={classes.ratingDivider}>|</b>
                      <VerifiedIcon style={{ color: '#02AFEF', paddingRight: '6px' }} />
                      118 Reviews
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
            {/* Pricing */}
            <Grid container alignItems='center'>
              <Grid item className={classes.newPrice}>
                ₹{product?.product?.price?.newprice}
              </Grid>
              <Grid item className={classes.oldPrice}>
                <del>₹ {product?.product?.price?.oldprice}</del>
              </Grid>
              <Grid item style={{ color: '#C02B2B' }}>
                <b>{percentageDiscount.toFixed(2)}% off</b>
              </Grid>
            </Grid>
            <Grid>
              <p>{'(MRP Inclusive of all Taxes)'}</p>
            </Grid>
            {/* description */}
            <Grid>{product?.product?.description}</Grid>
            {/* highlight */}
            <Grid style={{ marginTop: 20 }}>
              {highlight.map((item, index) => (
                <Grid container alignItems='center'>
                  <Grid item>
                    <DoneIcon style={{ color: '#8EA64C', paddingRight: '6px' }} />
                  </Grid>
                  <Grid item>{item}</Grid>
                </Grid>
              ))}
            </Grid>
            {/* Quantity Selector */}
            <Grid container style={{ marginTop: 3 }} alignItems='center' spacing={2}>
              <Grid item>
                <IconButton onClick={handleDecrement} disabled={count === 1}>
                  <RemoveIcon />
                </IconButton>
              </Grid>
              <Grid item>{count}</Grid>
              <Grid item>
                <IconButton onClick={handleIncrement}>
                  <AddIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <button className={classes.button}>Add to cart</button>
              </Grid>
            </Grid>
            {/* Delivery Check Input */}
            <TextField
              style={{ width: '60%', marginTop: 20 }}
              variant='outlined'
              placeholder='Enter Pin code to check delivery'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PlaceIcon style={{ color: '#676C5A', paddingRight: 5 }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Button style={{ color: '#56642E', fontWeight: '600' }}>Check</Button>
                  </InputAdornment>
                ),
              }}
            />
            {/* Clinic Tested */}
            <Grid container style={{ marginTop: 30, fontSize: 14 }}>
              <Grid item>
                <center>
                  <img src={image1} alt='Clinic Tested' width='50' />
                  <br />
                  <span>Clinic Tested</span>
                </center>
              </Grid>
              <Grid item style={{ marginLeft: 40, marginRight: 40 }}>
                <center>
                  <img src={image2} alt='Dermatologist Approved' width='50' />
                  <br />
                  <span>Dermatologist Approved</span>
                </center>
              </Grid>
              <Grid item>
                <center>
                  <img src={image3} alt='Safe and Effective' width='50' />
                  <br />
                  <span>Safe and Effective</span>
                </center>
              </Grid>
            </Grid>
            {/* When to use?*/}
            <Grid style={{ marginTop: 30 }}>
              <h4>When to use?</h4>
              <p>{product?.whenToUse?.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {steps.map((step, index) => (
                  <div key={index} style={{ position: 'relative', textAlign: 'center' }}>
                    {step === currentStep && (
                      <DoneIcon
                        style={{
                          color: 'white',
                          backgroundColor: '#8EA64C',
                          borderRadius: '50%',
                          padding: 2,
                        }}
                      />
                    )}
                    {step}
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <center style={{ marginTop: 100 }}>
          {/* key ingredients */}
          <Grid>
            <h4>Key ingredients</h4>
            <p style={{ color: '#676C5A' }}>Our key ingredients are all hand picked from the best places across the world</p>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }} style={{ marginTop: 10 }}>
              {keyIngredients.map((item, index) => (
                <Grid item xs={4} sm={4} md={4} style={{ padding: 10 }}>
                  <Grid container style={{ backgroundColor: '#F5F8EE', padding: 20, borderRadius: 12 }}>
                    <Grid item xs={3}>
                      <img src={item?.imag} alt='Check' style={{ height: 80, width: 80, margin: 10 }} />
                    </Grid>
                    <Grid item xs={9}>
                      <h4 style={{ margin: 0, marginLeft: 3, textAlign: 'left' }}>{item?.name}</h4>
                      <p style={{ margin: 7, textAlign: 'left' }}>{item?.description}</p>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* why should you buy it? */}
          <Grid style={{ marginTop: 100 }}>
            <h4>Why should you buy it?</h4>
            <p style={{ color: '#676C5A' }}>Our key ingredients are all hand picked from the best places across the world</p>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {WhyShouldBuy.map((item, index) => (
                <Grid item xs={12} sm={12} md={6} style={{ padding: '30px 0px 0px 20px' }}>
                  <Grid>
                    <img src={item?.img} alt='Check' style={{ height: 250, width: '100%', borderRadius: 12 }}></img>
                  </Grid>
                  <Grid style={{ textAlign: 'left' }}>
                    <div style={{ color: '#424C23', padding: '0px 20px 20px 20px' }}>
                      <div style={{ paddingTop: 15, paddingBottom: 10 }}>
                        <b>{item?.title}</b>
                      </div>
                      <div>{item?.description}</div>
                    </div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </center>
      </div>
      {/* Rated */}
      <Grid container style={{ marginTop: 80, backgroundColor: '#F5F8EE', padding: 100 }}>
        <Grid item md={5}>
          <img src='https://bhubotanicals.com/cdn/shop/files/Photo_bcc348e9-c2da-4b4a-b8c0-cb7f2d3210b5.jpg?v=1711214884&width=2048' style={{ position: 'absolute', border: '10px solid #F5F8EE', height: 175, width: 165 }} alt='Check' />
          <img src='https://m.media-amazon.com/images/I/A19zOEH4oFL._AC_UF1000,1000_QL80_.jpg' height='100' width='80' style={{ position: 'static', height: 350, width: 320, padding: '16px 10px 10px 100px' }} alt='Check' />
        </Grid>
        <Grid item md={3}>
          <h1>Rated 4.8</h1>
          <p>8372 verified reviews</p>
          <Grid container alignItems='center'>
            <Grid item>
              <Rating name='half-rating-read' defaultValue={4.5} precision={0.5} readOnly style={{ fontSize: 'xx-large', color: '#faaf00' }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: 'flex', alignItems: 'center' }}>
              {'(5138)'}
            </Grid>
          </Grid>
          <Grid container alignItems='center'>
            <Grid item>
              <Rating name='half-rating-read' defaultValue={4.5} precision={0.5} readOnly style={{ fontSize: 'xx-large', color: '#faaf00' }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: 'flex', alignItems: 'center' }}>
              {'(2138)'}
            </Grid>
          </Grid>
          <Grid container alignItems='center'>
            <Grid item>
              <Rating name='half-rating-read' defaultValue={4.5} precision={0.5} readOnly style={{ fontSize: 'xx-large', color: '#faaf00' }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: 'flex', alignItems: 'center' }}>
              {'(138)'}
            </Grid>
          </Grid>
          <Grid container alignItems='center'>
            <Grid item>
              <Rating name='half-rating-read' defaultValue={4.5} precision={0.5} readOnly style={{ fontSize: 'xx-large', color: '#faaf00' }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: 'flex', alignItems: 'center' }}>
              {'(38)'}
            </Grid>
          </Grid>
          <Grid container alignItems='center'>
            <Grid item>
              <Rating name='half-rating-read' defaultValue={4.5} precision={0.5} readOnly style={{ fontSize: 'xx-large', color: '#faaf00' }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: 'flex', alignItems: 'center' }}>
              {'(8)'}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <button className={classes.button} style={{ marginTop: 20 }}>
            Write a review
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
