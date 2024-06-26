import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './styles';
import HomeBg from '../../asset/Images/Home.jfif';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LeafLeft from "../../asset/PNG's/leaftLeft.png";
import LeafRight from "../../asset/PNG's/leaftRight.png";
import ContentBg from '../../asset/Images/contentBg.jpg';
import Delivery from '../../asset/Icons/delivery.png';
import Star from '../../asset/Icons/star.png';
import Results from '../../asset/Icons/results.png';
import ProductCard from '../../components/ProductCard';
import CategoryCards from './components/CategoryCards';
import Better from "../../asset/PNG's/better.png";
import TestimonialCards from '../../components/TestimonialCards';
import DeliverCards from './components/DeliverCards';
import Contact from '../Contact';
import routes from '../../utils/routes.json';
import Footer from '../../components/Footer';
import image1 from '../../asset/Images/location1.png';
import image2 from '../../asset/Images/location2.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const productList = [
    {
      img: HomeBg,
      title: 'Goat Milk Soap',
      description: 'Transformational treatments with dermo-purifying',
      offer: 12,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 349.0,
      status: 'Best seller',
      category: 'Body',
      condition: 'Oily Skin',
    },
    {
      img: HomeBg,
      title: 'Donkey Milk Soap',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 20,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 399.0,
      status: 'Sold out',
      category: 'Body',
      condition: 'Dry Skin',
    },
    {
      img: HomeBg,
      title: 'Shampoo',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 12,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 499.0,
      status: 'Most Searched',
      category: 'Hair',
    },
    {
      img: HomeBg,
      title: 'Hair Serum',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 8,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 699.0,
      category: 'Hair',
    },
  ];
  const comboProductList = [
    {
      img: HomeBg,
      title: 'Goat Milk Soap',
      subTitle: 'Combo pack of 2',
      description: 'Transformational treatments with dermo-purifying',
      offer: 12,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 349.0,
      status: 'Best seller',
      category: 'Body',
      condition: 'Oily Skin',
    },
    {
      img: HomeBg,
      title: 'Donkey Milk Soap',
      subTitle: 'Combo pack of 2',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 20,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 399.0,
      status: 'Sold out',
      category: 'Body',
      condition: 'Dry Skin',
    },
    {
      img: HomeBg,
      title: 'Shampoo',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 12,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 499.0,
      status: 'Most Searched',
      category: 'Hair',
    },
  ];

  return (
    <>
      {/* Home */}
      <Box component={'section'} position={'relative'} boxShadow={'inset 28rem -1rem 20rem -3rem rgba(0, 0, 0, 0.8)'}>
        <Box component={'div'} className='slider'>
          <Box component={'div'} className={`${classes.homeBanner} slide`} sx={{ background: `url(${HomeBg})`, animationDelay: '-0 !important' }} />
          <Box component={'div'} className={`${classes.homeBanner} slide`} sx={{ background: `url(${image1})`, animationDelay: '-2s !important' }} />
          <Box component={'div'} className={`${classes.homeBanner} slide`} sx={{ background: `url(${image2})`, animationDelay: '-4s !important' }} />
          <Box component={'div'} className={`${classes.homeBanner} slide`} sx={{ background: `url(${HomeBg})`, animationDelay: '-6s !important' }} />
          <Box component={'div'} className={`${classes.homeBanner} slide`} sx={{ background: `url(${image1})`, animationDelay: '-8s !important' }} />
        </Box>
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
            <Button
              variant='contained'
              color='primary'
              sx={{ maxWidth: '280px' }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                navigate(`/${routes.product}`);
              }}>
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
      <Box component={'section'} position={'relative'} gap={'140px'} className={`${classes.flexColumn} ${classes.padding100}`}>
        <Box component={'div'} className={classes.flexColumn} gap={'60px'}>
          <Typography className={classes.containerHeading}>Our Best Sellers</Typography>
          <Grid container width={'100%'} spacing={4}>
            {productList.map((items, index) => {
              return (
                <Grid item lg={3} md={2} sm={1} key={index}>
                  <ProductCard {...items} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box component={'div'} className={classes.flexColumn} gap={'60px'}>
          <Typography className={classes.containerHeading} component={'h6'}>
            Shop by skin concern/categories
          </Typography>
          <Grid container spacing={3} height={'75vh'}>
            <Grid item lg={4} md={6} sm={12}>
              <CategoryCards index={0} />
            </Grid>
            <Grid item container lg={8} md={6} sm={12} spacing={3}>
              <Grid item lg={6} sm={12}>
                <CategoryCards index={1} />
              </Grid>
              <Grid item lg={6} sm={12}>
                <CategoryCards index={2} />
              </Grid>
              <Grid item lg={6} sm={12}>
                <CategoryCards index={3} />
              </Grid>
              <Grid item lg={6} sm={12}>
                <CategoryCards index={4} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box component={'div'} className={classes.cardContainer}>
          <Box component={'div'} className={classes.flexColumn} gap={'35px'}>
            <Typography component={'h6'} className={classes.cardContainerHeading} lineHeight={'35px !important'} color={'#1C2409'}>
              Make your skin better with
              <Typography component={'span'} className={classes.cardContainerHeading} color={'#56642E'}>
                Ajilda
              </Typography>
            </Typography>
            <Typography component={'h6'} variant='largeRegular' style={{ fontSize: '18px' }} color={'#393939'} lineHeight={'33px'}>
              Lorem ipsum dolor sit amet consectetur. Morbi habitant volutpat sed curabitur gravida quis platea ac. Non ullamcorper sit egestas metus. Quam quam aliquam risus tristique.Lorem ipsum dolor sit amet consectetur. Morbi habitant volutpat sed curabitur gravida quis platea ac. Non
              ullamcorper sit egestas metus. Quam quam aliquam risus tristique.
            </Typography>
            <Button
              variant='contained'
              color='primary'
              sx={{ maxWidth: '280px', marginTop: 1.5 }}
              onClick={() => {
                navigate(`/${routes.product}`);
              }}>
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
            {comboProductList.map((items, index) => {
              return (
                <Grid item lg={4} md={2} sm={1} key={index}>
                  <ProductCard {...items} />
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
          <Button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => {
              navigate(`/${routes.product}`);
            }}
            variant='outlined'
            color='primary'
            className='hover_button slow-transition'
            sx={{ minWidth: '320px' }}
            endIcon={
              <svg width={isHovered ? '100' : '60'} height='40' viewBox='0 0 200 100' className='slow-transition'>
                <path d={isHovered ? 'M0,50 L180,50 L170,40 M180,50 L170,60' : 'M0,50 L150,50 L140,40 M150,50 L140,60'} strokeWidth={'4px'} stroke='#fff' fill='none' className='slow-transition' />
              </svg>
            }>
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
              <DeliverCards index={0} />
            </Grid>
            <Grid item lg={12} height={'40%'}>
              <DeliverCards index={1} />
            </Grid>
          </Grid>
          <Grid item lg={5} padding={'0px 20px'}>
            <DeliverCards index={2} />
          </Grid>
          <Grid item container spacing={3} lg={3.5}>
            <Grid item lg={12} height={'60%'}>
              <DeliverCards index={3} />
            </Grid>
            <Grid item lg={12} height={'40%'}>
              <DeliverCards index={4} />
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
