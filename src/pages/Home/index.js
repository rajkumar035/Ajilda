import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';
import HomeBg from '../../assets/Images/Home.jfif';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LeafLeft from "../../assets/PNG's/leaftLeft.png";
import LeafRight from "../../assets/PNG's/leaftRight.png";
import ContentBg from '../../assets/Images/contentBg.jpg';
import Delivery from '../../assets/Icons/delivery.png';
import Star from '../../assets/Icons/star.png';
import Results from '../../assets/Icons/results.png';
import ProductCard from '../../components/ProductCard';
import CategoryCards from './components/CategoryCards';
import Better from "../../assets/PNG's/better.png";
import TestimonialCards from '../../components/TestimonialCards';
import DeliverCards from './components/DeliverCards';
import Contact from '../Contact';
import Footer from '../../components/Footer';

const Home = () => {
  const classes = useStyles();

  return (
    <>
      {/* Home */}
      <Box component={'section'} position={'relative'} boxShadow={'inset 28rem -1rem 20rem -3rem rgba(0, 0, 0, 0.8)'}>
        <Box component={'img'} src={HomeBg} className={classes.homeBanner} />
        <Box component={'div'} className={classes.bannerContainer}>
          <Box className={classes.flexColumn} gap={'48px'}>
            <Box className={classes.flexColumn} gap={'24px'}>
              <Typography className={classes.homeHeading} component={'h6'}>
                Lorem ispum dolar sit
              </Typography>
              <Typography variant='mediumThin' color={'#fff'} lineHeight={'1.5rem'}>
                There are many variations of the passages of lorem Ipsum from available, majority.
              </Typography>
            </Box>
            <Button variant='contained' color='primary' sx={{ maxWidth: '280px' }} endIcon={<ArrowForwardIcon />}>
              Explore our products
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Homepage Subcontent */}
      <Box component={'section'} position={'relative'}>
        <Box component={'img'} src={ContentBg} className={classes.contentBg} />
        <Box component={'div'} className={classes.contentParentLayout}>
          <Box component={'img'} src={LeafLeft} className={classes.leafStyle} left={0} />
          <Box component={'div'} className={classes.flexCenter} gap={'120px'}>
            <Box component={'div'} className={classes.flexColumn} gap={'12px'} alignItems={'center'}>
              <Box component={'img'} src={Delivery} className={classes.contentIcon} />
              <Typography variant='mediumRegular' color={'#192108'}>
                Fast delivery
              </Typography>
            </Box>
            <Box component={'div'} className={classes.flexColumn} gap={'12px'} alignItems={'center'}>
              <Box component={'img'} src={Star} className={classes.contentIcon} />
              <Typography variant='mediumRegular' color={'#192108'}>
                Promising results
              </Typography>
            </Box>
            <Box component={'div'} className={classes.flexColumn} gap={'12px'} alignItems={'center'}>
              <Box component={'img'} src={Results} className={classes.contentIcon} />
              <Typography variant='mediumRegular' color={'#192108'}>
                Promising results
              </Typography>
            </Box>
          </Box>
          <Box component={'img'} src={LeafRight} className={classes.leafStyle} right={0} />
        </Box>
      </Box>

      {/* Best Seller */}
      <Box component={'section'} position={'relative'} gap={'180px'} className={`${classes.flexColumn} ${classes.padding100}`}>
        <Box component={'div'} className={classes.flexColumn} gap={'60px'}>
          <Typography className={classes.containerHeading}>Our Best Sellers</Typography>
          <Grid container width={'100%'} spacing={4}>
            {[1, 2, 3, 4].map((items, index) => {
              return (
                <Grid item lg={3} md={2} sm={1} key={index}>
                  <ProductCard />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box component={'div'} className={classes.flexColumn} gap={'60px'}>
          <Typography className={classes.containerHeading} component={'h6'}>
            Shop by skin concern /categories
          </Typography>
          <Grid container spacing={3} height={'75vh'}>
            <Grid item lg={4} md={6} sm={12}>
              <CategoryCards />
            </Grid>
            <Grid item container lg={8} md={6} sm={12} spacing={3}>
              <Grid item lg={6} sm={12}>
                <CategoryCards />
              </Grid>
              <Grid item lg={6} sm={12}>
                <CategoryCards />
              </Grid>
              <Grid item lg={6} sm={12}>
                <CategoryCards />
              </Grid>
              <Grid item lg={6} sm={12}>
                <CategoryCards />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box component={'div'} className={classes.cardContainer}>
          <Box component={'div'} className={classes.flexColumn} gap={'35px'}>
            <Typography component={'h6'} className={classes.cardContainerHeading} color={'#1C2409'}>
              Make your skin better with
              <Typography component={'span'} className={classes.cardContainerHeading} color={'#56642E'}>
                Ajilda
              </Typography>
            </Typography>
            <Typography component={'h6'} variant='largeRegular' color={'#393939'} lineHeight={'33px'}>
              Lorem ipsum dolor sit amet consectetur. Morbi habitant volutpat sed curabitur gravida quis platea ac. Non ullamcorper sit egestas metus. Quam quam aliquam risus tristique.Lorem ipsum dolor sit amet consectetur. Morbi habitant volutpat sed curabitur gravida quis platea ac. Non
              ullamcorper sit egestas metus. Quam quam aliquam risus tristique.
            </Typography>
            <Button variant='contained' color='primary' sx={{ maxWidth: '280px' }}>
              Discover More
            </Button>
          </Box>
          <Box component={'img'} src={Better} height={'420px'} width={'100%'} className='img-contains' />
        </Box>
        <Box component={'div'} className={classes.flexColumn} gap={'60px'}>
          <Typography className={classes.containerHeading} component={'h6'}>
            Our Best Combos
          </Typography>
          <Grid container width={'100%'} spacing={4}>
            {[1, 2, 3].map((items, index) => {
              return (
                <Grid item lg={4} md={2} sm={1} key={index}>
                  <ProductCard />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {/* Static BG */}
      <Box component={'section'} className={classes.staticContainerBg}>
        <Box component={'div'} className={classes.staticContainerBgLayout} />
        <Box component={'div'} className={`${classes.flexColumn} ${classes.staticContainerContentLayout}`}>
          <Typography className={classes.staticContainerHeading} component={'p'}>
            Make your skin better with Ajilda
          </Typography>
          <Button variant='outlined' color='primary' sx={{ minWidth: '320px' }}>
            Explore products
          </Button>
        </Box>
      </Box>

      {/* Testimonials */}
      <Box component={'section'} position={'relative'} gap={'180px'} className={`${classes.flexColumn} ${classes.padding100}`}>
        <Box component={'div'} className={classes.flexColumn} gap={'60px'}>
          <Typography className={classes.containerHeading} component={'h6'}>
            Testimonials
          </Typography>
          <Grid container width={'100%'} spacing={4}>
            {[1, 2, 3].map((items, index) => {
              return (
                <Grid item lg={4} md={2} sm={1} key={index}>
                  <TestimonialCards index={index} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {/* Deliver */}
      <Box component={'section'} width={'100%'} padding={'40px 0px 120px 0px'}>
        <Grid container height={'90vh'} width={'100%'}>
          <Grid item container lg={3.5} spacing={3}>
            <Grid item lg={12} height={'60%'}>
              <DeliverCards />
            </Grid>
            <Grid item lg={12} height={'40%'}>
              <DeliverCards />
            </Grid>
          </Grid>
          <Grid item lg={5} padding={'0px 20px'}>
            <DeliverCards />
          </Grid>
          <Grid item container spacing={3} lg={3.5}>
            <Grid item lg={12} height={'60%'}>
              <DeliverCards />
            </Grid>
            <Grid item lg={12} height={'40%'}>
              <DeliverCards />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
