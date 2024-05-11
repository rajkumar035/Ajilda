import React, { useState } from "react";
import product from "./product.json";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import VerifiedIcon from "@mui/icons-material/Verified";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PlaceIcon from "@mui/icons-material/Place";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import image1 from "../../asset/Group 1.svg";
import image2 from "../../asset/Group 2.svg";
import image3 from "../../asset/Group 3.svg";

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: "#8EA64C",
  },
  thumbnailContainer: {
    display: "flex",
    flexDirection: "column",
  },
  thumbnail: {
    width: "90px",
    height: "90px",
    margin: "5px",
    cursor: "pointer",
    border: `3px solid white`,
  },
  selectedThumbnail: {
    border: `3px solid ${"#8EA64C"}`,
  },
  largeImage: {
    width: "78%",
    height: "100%",
    marginLeft: "20px",
    margin: "5px",
  },
  tags: {
    backgroundColor: "#E0E8CA",
    padding: "10px 18px 10px 18px",
    borderRadius: 30,
    marginRight: 10,
  },
  ratingDivider: {
    color: "#8C8C8C",
    fontSize: 20,
    margin: 0,
    padding: "10px 10px",
  },
  newPrice: {
    fontWeight: 600,
    fontSize: 20,
  },
  oldPrice: {
    fontSize: 16,
    color: "#6B6B6B",
    paddingLeft: 10,
    paddingTop: 3,
    paddingRight: 10,
  },
  button: {
    width: 250,
    backgroundColor: "#56642E",
    padding: 12,
    border: "none",
    borderRadius: 12,
    color: "white",
    margin: "10px 10px",
  },
}));

const ProductDetails = () => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(product?.product?.image?.["0"]);
  const tagsArray = Object.values(product?.product?.tags || {});
  const highlight = Object.values(product?.product?.highlight || {});
  const keyIngredients = Object.values(product?.keyIngredients || {});
  const WhyShouldBuy = Object.values(product?.WhyShouldBuy || {});
  const oldPrice = parseFloat(product?.product?.price?.oldprice);
  const newPrice = parseFloat(product?.product?.price?.newprice);
  const percentageDiscount = ((oldPrice - newPrice) / oldPrice) * 100;
  const [count, setCount] = useState(1);
  const steps = ["Cleanser", "Serum", "Night Cream", "Toner", "Moisturizer"];
  const currentStep = product?.whenToUse?.tag;
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  console.log(product?.WhyShouldBuy, "WhyShouldBuy");
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <div style={{ display: "flex" }}>
            <div className={classes.thumbnailContainer}>
              {Object.keys(product.product.image).map((key) => (
                <img key={key} src={product.product.image[key]} alt="" className={`${classes.thumbnail} ${selectedImage === product.product.image[key] ? classes.selectedThumbnail : ""}`} onClick={() => setSelectedImage(product.product.image[key])} />
              ))}
            </div>
            <img src={selectedImage} alt="" className={classes.largeImage} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
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
                <Grid container alignItems="center">
                  <Grid item>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                  </Grid>
                  <Grid item style={{ fontSize: "larger", paddingLeft: 5, display: "flex", alignItems: "center" }}>
                    4.5<b className={classes.ratingDivider}>|</b>
                    <VerifiedIcon style={{ color: "#02AFEF", paddingRight: "6px" }} />
                    118 Reviews
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          {/* Pricing */}
          <Grid container alignItems="center">
            <Grid item className={classes.newPrice}>
              ₹{product?.product?.price?.newprice}
            </Grid>
            <Grid item className={classes.oldPrice}>
              <del>₹ {product?.product?.price?.oldprice}</del>
            </Grid>
            <Grid item style={{ color: "#C02B2B" }}>
              <b>{percentageDiscount.toFixed(2)}% off</b>
            </Grid>
          </Grid>
          <Grid>
            <p>{"(MRP Inclusive of all Taxes)"}</p>
          </Grid>
          {/* description */}
          <Grid>{product?.product?.description}</Grid>
          {/* highlight */}
          <Grid style={{ marginTop: 20 }}>
            {highlight.map((item, index) => (
              <Grid container alignItems="center">
                <Grid item>
                  <DoneIcon style={{ color: "#8EA64C", paddingRight: "6px" }} />
                </Grid>
                <Grid item>{item}</Grid>
              </Grid>
            ))}
          </Grid>
          {/* Quantity Selector */}
          <Grid container style={{ marginTop: 3 }} alignItems="center" spacing={2}>
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
            style={{ width: "58%", marginTop: 20 }}
            variant="outlined"
            placeholder="Enter Pin code to check delivery"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PlaceIcon style={{ color: "#676C5A", paddingRight: 5 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button style={{ color: "#56642E", fontWeight: "600" }}>Check</Button>
                </InputAdornment>
              ),
            }}
          />
          {/* Clinic Tested */}
          <Grid container style={{ marginTop: 30 }}>
            <Grid item>
              <center>
                <img src={image1} alt="Clinic Tested" />
                <br />
                <span>Clinic Tested</span>
              </center>
            </Grid>
            <Grid item style={{ marginLeft: 40, marginRight: 40 }}>
              <center>
                <img src={image2} alt="Dermatologist Approved" />
                <br />
                <span>Dermatologist Approved</span>
              </center>
            </Grid>
            <Grid item>
              <center>
                <img src={image3} alt="Safe and Effective" />
                <br />
                <span>Safe and Effective</span>
              </center>
            </Grid>
          </Grid>
          {/* When to use?*/}
          <Grid style={{ marginTop: 30 }}>
            <h4>When to use?</h4>
            <p>{product?.whenToUse?.description}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {steps.map((step, index) => (
                <div key={index} style={{ position: "relative", textAlign: "center" }}>
                  {step === currentStep && (
                    <DoneIcon
                      style={{
                        color: "white",
                        backgroundColor: "#8EA64C",
                        borderRadius: "50%",
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
      <center style={{ marginTop: 50 }}>
        {/* key ingredients */}
        <Grid>
          <h4>Key ingredients</h4>
          <p style={{ color: "#676C5A" }}>Our key ingredients are all hand picked from the best places across the world</p>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }} style={{ marginTop: 10 }}>
            {keyIngredients.map((item, index) => (
              <Grid item xs={4} sm={4} md={4} style={{ padding: 10 }}>
                <Grid container style={{ backgroundColor: "#F5F8EE", padding: 20, borderRadius: 15 }}>
                  <Grid item xs={3}>
                    <img src={item?.imag} style={{ height: 80, width: 80, margin: 10 }} />
                  </Grid>
                  <Grid item xs={9}>
                    <h4 style={{ margin: 0, marginLeft: 3, textAlign: "left" }}>{item?.name}</h4>
                    <p style={{ margin: 7, textAlign: "left" }}>{item?.description}</p>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* why should you buy it? */}
        <Grid>
          <h4>Why should you buy it?</h4>
          <p style={{ color: "#676C5A" }}>Our key ingredients are all hand picked from the best places across the world</p>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {WhyShouldBuy.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} style={{ padding: 10 }}>
               <Grid>
                  <img src={""} style={{}}></img>
               </Grid>
               <Grid>

               </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </center>
    </div>
  );
};

export default ProductDetails;
