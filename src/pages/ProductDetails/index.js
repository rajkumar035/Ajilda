import React, { useEffect, useState } from "react";
import product from "./product.json";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import VerifiedIcon from "@mui/icons-material/Verified";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PlaceIcon from "@mui/icons-material/Place";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import image1 from "../../assets/SVG's/Group 1.svg";
import image2 from "../../assets/SVG's/Group 2.svg";
import image3 from "../../assets/SVG's/Group 3.svg";
import testimonial1 from "../../assets/SVG's/Testimonial 1.png";
import testimonial2 from "../../assets/SVG's/Testimonial2.png";
// MUI 5 stepper start
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import HomeBg from "../../assets/Images/Home.jfif";

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
    padding: "6px 18px 6px 18px",
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
    fontSize: 27,
  },
  oldPrice: {
    fontSize: 22,
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
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  containerHeading: {
    fontSize: "36px !important",
    fontWeight: "400 !important",
    fontFamily: "DM Serif Display !important",
    color: "#000 !important",
    textAlign: "center !important",
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
  // const currentStep = product?.whenToUse?.tag;
  // mui stepper start
  const currentStepIndex = steps.findIndex((step) => step === product?.whenToUse?.tag);
  // end

  const productList = [
    {
      img: HomeBg,
      title: "Goat Milk Soap",
      description: "Transformational treatments with dermo-purifying",
      offer: 12,
      reviews: [{ title: "Check", Author: "Check" }],
      rating: "4.5",
      actualPrice: 349.0,
      status: "Best seller",
      category: "Body",
      condition: "Oily Skin",
    },
    {
      img: HomeBg,
      title: "Shampoo",
      description: "Transformational treatments with dermo-purifying blends",
      offer: 12,
      reviews: [{ title: "Check", Author: "Check" }],
      rating: "4.5",
      actualPrice: 499.0,
      status: "Most Searched",
      category: "Hair",
    },
    {
      img: HomeBg,
      title: "Hair Serum",
      description: "Transformational treatments with dermo-purifying blends",
      offer: 8,
      reviews: [{ title: "Check", Author: "Check" }],
      rating: "4.5",
      actualPrice: 699.0,
      category: "Hair",
    },
  ];

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  console.log(product?.WhyShouldBuy, "WhyShouldBuy");
  // testimonial start
  const people = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Person ${i + 1}`,
    date: `23/04/${2023 + (i % 12)}`,
    testimonialImage: i % 2 === 0 ? testimonial1 : testimonial2,
  }));

  const [productDescription, setProductDescription] = useState("Nice");
  const [ratingValue, setRatingValue] = useState(4.5);

  useEffect(() => {
    setProductDescription("Nice");
    setRatingValue(4.5);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(people.length / itemsPerPage);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPeople = people.slice(startIndex, endIndex);
  // testimonia end
  return (
    <div>
      <div style={{ padding: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12} lg={6}>
            <div style={{ display: "flex" }}>
              <div className={classes.thumbnailContainer}>
                {Object.keys(product.product.image).map((key) => (
                  <img key={key} src={product.product.image[key]} alt="Check" className={`${classes.thumbnail} ${selectedImage === product.product.image[key] ? classes.selectedThumbnail : ""}`} onClick={() => setSelectedImage(product.product.image[key])} />
                ))}
              </div>
              <img src={selectedImage} alt="Check" className={classes.largeImage} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={12} lg={6} style={{ height: "70vh", overflow: "scroll" }}>
            {/* Product Name and tags*/}
            <Grid container>
              <Grid item>
                <h1>{product?.product?.name}</h1>
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
                      <Rating name="half-rating-read" style={{ color: "#faaf00" }} defaultValue={4.5} precision={0.5} readOnly />
                    </Grid>
                    <Grid
                      item
                      style={{
                        fontSize: "larger",
                        paddingLeft: 5,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      4.5<b className={classes.ratingDivider}>|</b>
                      <VerifiedIcon style={{ color: "#02AFEF", paddingRight: "6px" }} />
                      118 Reviews
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
            {/* Pricing */}
            <Grid container alignItems="center" style={{marginTop:"25px"}}>
              <Grid item className={classes.newPrice}>
                ₹{product?.product?.price?.newprice}
              </Grid>
              <Grid item className={classes.oldPrice}>
                <del>₹ {product?.product?.price?.oldprice}</del>
              </Grid>
              <Grid item >
                <b style={{ color: "#C02B2B" ,fontSize:20}}>{parseInt(percentageDiscount.toFixed(2))}% off</b>
              </Grid>
            </Grid>
            <Grid style={{marginTop:3}}>
            {"(MRP Inclusive of all Taxes)"}
            </Grid>
            {/* description */}
            <Grid style={{marginTop:"45px"}}>{product?.product?.description}</Grid>
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
            <Grid container style={{ marginTop: 15 }} alignItems="center" spacing={2}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #000",
                  justifyContent: "center",
                  borderRadius: "10px",
                  width: "100px",
                  margin: "20px 0px 0px 15px",
                }}
              >
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
              </div>
              <Grid item>
                <Link to={`/cart`} style={{ textDecoration: "none" }}>
                  <button className={classes.button}>Add to cart</button>
                </Link>
              </Grid>
            </Grid>
            {/* Delivery Check Input */}
            <TextField
              style={{ width: "60%", marginTop: 20 }}
              variant="outlined"
              placeholder="Enter Pin code to check delivery"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  // height:50
                },
              }}
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
            <Grid container style={{ marginTop: 50, fontSize: 14 }}>
              <Grid item>
                <center>
                  <img src={image1} alt="Clinic Tested" width="50" />
                  <br />
                  <span>Clinic Tested</span>
                </center>
              </Grid>
              <Grid item style={{ marginLeft: 40, marginRight: 40 }}>
                <center>
                  <img src={image2} alt="Dermatologist Approved" width="50" />
                  <br />
                  <span>Dermatologist Approved</span>
                </center>
              </Grid>
              <Grid item>
                <center>
                  <img src={image3} alt="Safe and Effective" width="50" />
                  <br />
                  <span>Safe and Effective</span>
                </center>
              </Grid>
            </Grid>
            {/* When to use?*/}
            <Grid style={{ marginTop: 50 }}>
              <h4>When to use?</h4>
              <p>{product?.whenToUse?.description}</p>
              <Stepper style={{ padding: "50px" }} activeStep={1} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={index}>
                    {/* <StepLabel StepIconComponent={() => (currentStepIndex === index ? <CheckCircleIcon style={{ fill: '#8ea64c',fontSize: 60 ,position: "sticky",marginTop: "-20px" ,zIndex:"1"}} /> : <CircleIcon style={{ fontSize: 47 ,position: "sticky",marginTop: "-11px" }}/>)}> */}
                    <StepLabel StepIconComponent={() => (currentStepIndex === index ? <CheckCircleIcon style={{ fill: "#8ea64c", zIndex: "1", fontSize: 35, position: "sticky", marginTop: "-5px", background: "white" }} /> : <CircleIcon style={{ zIndex: "1" }} />)}>
                      <b style={{ color: "black" }}>{label}</b>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>
        </Grid>
        <center style={{ marginTop: 100 }}>
          {/* key ingredients */}
          <Grid>
            <h2>Key ingredients</h2>
            <p style={{ color: "#676C5A" }}>Our key ingredients are all hand picked from the best places across the world</p>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }} style={{ marginTop: 10 }}>
              {keyIngredients.map((item, index) => (
                <Grid item xs={4} sm={4} md={4} style={{ padding: 10 }}>
                  <Grid
                    container
                    style={{
                      backgroundColor: "#F5F8EE",
                      padding: 20,
                      borderRadius: 12,
                    }}
                  >
                    <Grid item xs={3}>
                      <img src={item?.imag} alt="Check" style={{ height: 80, width: 80, margin: 10 }} />
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
          <Grid style={{ marginTop: 100 }}>
            <h2>Why should you buy it?</h2>
            <p style={{ color: "#676C5A" }}>Our key ingredients are all hand picked from the best places across the world</p>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {WhyShouldBuy.map((item, index) => (
                <Grid item xs={12} sm={12} md={6} style={{ padding: "30px 0px 0px 20px" }}>
                  <Grid>
                    <img src={item?.img} alt="Check" style={{ height: 250, width: "100%", borderRadius: 12, objectFit: "cover" }}></img>
                  </Grid>
                  <Grid style={{ textAlign: "left" }}>
                    <div
                      style={{
                        color: "#424C23",
                        padding: "0px 20px 20px 20px",
                      }}
                    >
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
      <Grid container style={{ marginTop: 80, backgroundColor: "#F5F8EE", padding: 100 }}>
        <Grid item md={5}>
          <img
            src="https://bhubotanicals.com/cdn/shop/files/Photo_bcc348e9-c2da-4b4a-b8c0-cb7f2d3210b5.jpg?v=1711214884&width=2048"
            style={{
              position: "absolute",
              border: "10px solid #F5F8EE",
              height: 175,
              width: 165,
            }}
            alt="Check"
          />
          <img
            src="https://m.media-amazon.com/images/I/A19zOEH4oFL._AC_UF1000,1000_QL80_.jpg"
            height="100"
            width="80"
            style={{
              position: "static",
              height: 350,
              width: 320,
              padding: "16px 10px 10px 100px",
            }}
            alt="Check"
          />
        </Grid>
        <Grid item md={3}>
          <h1>Rated 4.8</h1>
          <p>8372 verified reviews</p>
          <Grid container alignItems="center">
            <Grid item>
              <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly style={{ fontSize: "xx-large", color: "#faaf00" }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: "flex", alignItems: "center" }}>
              {"(5138)"}
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly style={{ fontSize: "xx-large", color: "#faaf00" }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: "flex", alignItems: "center" }}>
              {"(2138)"}
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly style={{ fontSize: "xx-large", color: "#faaf00" }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: "flex", alignItems: "center" }}>
              {"(138)"}
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly style={{ fontSize: "xx-large", color: "#faaf00" }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: "flex", alignItems: "center" }}>
              {"(38)"}
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly style={{ fontSize: "xx-large", color: "#faaf00" }} />
            </Grid>
            <Grid item style={{ paddingLeft: 5, display: "flex", alignItems: "center" }}>
              {"(8)"}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <button className={classes.button} style={{ marginTop: 20 }}>
            Write a review
          </button>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "0px 50px" }} />
      <Grid container style={{ padding: "10px 50px", backgroundColor: "#F5F8EE" }}>
        <h4>Hear Form Our Customers</h4>
        <br />
        {currentPeople.map((person) => (
          <Grid
            container
            key={person.id}
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              marginBottom: "20px",
              padding: "20px 40px",
            }}
          >
            <React.Fragment key={person.id}>
              <Grid item md={8}>
                <p
                  style={{
                    color: "#56642E",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {productDescription}
                </p>
                <p style={{ color: "#56642E", fontSize: "14px" }}>Good Product at a good price</p>
                <Rating name="half-rating-read" style={{ color: "#faaf00" }} defaultValue={ratingValue} precision={0.5} readOnly />
                <br />
                <img src={person.testimonialImage} alt="customer testimonial" width="200px" style={{ marginTop: "10px" }} />
              </Grid>
              <Grid item md={4}>
                <p style={{ textAlign: "end", fontSize: "14px" }}>
                  {person.name} | {person.date}
                </p>
              </Grid>
            </React.Fragment>
          </Grid>
        ))}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          sx={{
            marginLeft: "80%",
          }}
          renderItem={(props) => (
            <PaginationItem
              {...props}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "rgb(142, 166, 76)",
                  borderRadius: "0px",
                  color:"white"
                },
                "&.Mui-selected:hover": {
                  bgcolor: "rgb(142, 166, 76)",
                  borderRadius: "0px",
                },
                "&:not(.Mui-selected)": {
                  border: "1px solid rgb(142, 166, 76)",
                  borderRadius: "0px",
                  color:"#6F813C"
                },
              }}
            />
          )}
        />
      </Grid>
      <Grid style={{ padding: 100 }}>
        <Box component={"div"} className={classes.flexColumn} gap={"20px"}>
          <center>
            <h2>Frequently bought with</h2>
            <p style={{ color: "#676C5A" }}>Get better results with our other bestsellers</p>
          </center>
          <Grid container width={"100%"} spacing={4}>
            {productList.map((items, index) => {
              return (
                <Grid item lg={4} md={2} sm={1} key={index}>
                  <ProductCard {...items} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>

      <Footer />
    </div>
  );
};

export default ProductDetails;
