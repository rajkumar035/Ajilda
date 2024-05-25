import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';
import HomeBg from '../../asset/Images/Home.jfif';
import image1 from '../../asset/Images/location1.png';
import image2 from '../../asset/Images/location2.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import whatweoffer from "../../asset/PNG's/whatweoffer.png";
import soldBanner from "../../asset/PNG's/soldBanner.png";
import TestimonialCards from '../../components/TestimonialCards';
import Footer from '../../components/Footer';
import Contact from '../Contact';
import { useNavigate } from 'react-router-dom';
import routes from '../../utils/routes.json';

const About = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const content = [
    { count: 12, achivements: 'Products Sold' },
    { count: 85, achivements: 'Countries Serving' },
    { count: 15, achivements: 'Products in-house' },
    { count: 95, achivements: 'Happy Customers' },
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
                About Ajilda
              </Typography>
              <Typography variant='mediumThin' lineHeight={'25px'} color={'#fff'}>
                Lorem ipsum dolor sit amet consectetur. Id ultrices lacus quam malesuada scelerisque iaculis lacus. Faucibus semper lacus lorem euismod nulla lorem est. Pellentesque ipsum ac scelerisque laoreet consequat. Amet risus volutpat sapien.
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

      {/* What we offer */}
      <Box component={'section'} className={`${classes.padding100} ${classes.flexColumn}`} gap={'80px'}>
        <Box component={'div'} className={classes.flexColumn} alignItems={'center'} gap={'4px'}>
          <Typography className={classes.containerHeading} component={'h6'}>
            What we offer
          </Typography>
          <Typography variant='smallRegular' color={'#000'} component={'h6'}>
            We stand out because of what we offer. You are our priority!
          </Typography>
        </Box>
        <Box component={'div'} className={classes.flexCenter} justifyContent={'space-around'}>
          {[1, 2, 3].map((items, index) => {
            return (
              <Box key={index} component={'div'} alignItems={'center'} className={classes.flexColumn} gap={'14px'}>
                <Box component={'div'} sx={{ border: '1px solid #8EA64C', padding: '5px', borderRadius: '50%' }}>
                  <Box component={'div'} sx={{ border: '1px solid #8EA64C', padding: '5px', borderRadius: '50%' }}>
                    <Box component={'img'} src={whatweoffer} sx={{ height: '300px', width: '300px', border: '1px solid #8EA64C', borderRadius: '50%', objectFit: 'cover' }} />
                  </Box>
                </Box>
                <Box component={'div'} className={classes.flexColumn} alignItems={'center'} gap={'7px'}>
                  <Typography className={classes.offerContentHeading}>Organic Solution</Typography>
                  <Typography variant='smallRegular' color={'#6B6B6B'}>
                    Lorem ipsum is a dummy text
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Banner */}
      <Box component={'div'} className={classes.flexColumn}>
        <Box component={'img'} src={soldBanner} alt='banner' sx={{ width: '100%', height: '750px', objectFit: 'cover' }} />
        <Box component={'div'} sx={{ padding: '120px', background: '#EEE8E6' }}>
          <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '80px' }}>
            {content.map((items, index) => {
              return (
                <Box key={index} component={'div'} className={classes.flexCenter} gap={'80px'}>
                  <Box component={'div'} className={classes.flexColumn} alignItems={'center'} gap={'16px'}>
                    <Typography className={classes.soldBannerHeading} component={'h6'}>
                      {items.count}
                    </Typography>
                    <Typography variant='mediumThin' color={'#1C2409'} component={'h6'}>
                      {items.achivements}
                    </Typography>
                  </Box>
                  {index !== 3 && <Box component={'div'} sx={{ height: '140px', width: '1px', background: '#B89354' }} />}
                </Box>
              );
            })}
          </Box>
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

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
