import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';
import HomeBg from '../../Assets/Images/Home.jfif';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LeafLeft from "../../Assets/PNG's/leaftLeft.png";
import LeafRight from "../../Assets/PNG's/leaftRight.png";
import ContentBg from '../../Assets/Images/contentBg.jpg';
import Delivery from '../../Assets/Icons/delivery.png';
import Star from '../../Assets/Icons/star.png';
import Results from '../../Assets/Icons/results.png';
import ProductCard from '../../components/ProductCard';
import CategoryCards from './components/CategoryCards';
import Better from "../../Assets/PNG's/better.png";
import TestimonialCards from '../../components/TestimonialCards';
import DeliverCards from './components/DeliverCards';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import logo from "../../Assets/PNG's/logo.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const shopFor = ['Soap', 'Serum', 'M Cream', 'Shampoo', 'Facewash', 'Lip balm', 'Hair oil', 'Perfume'];
  const links = [
    { label: "FAQ's", link: '/' },
    { label: 'Legal', link: '/' },
    { label: 'Order tracking', link: '/' },
    { label: 'Account', link: '/' },
    { label: 'Blogs', link: '/' },
  ];

  return (
    <Box component={'article'}>
      {/* Homepage */}
      <Box component={'section'} position={'relative'} boxShadow={'inset 28rem -1rem 20rem -3rem rgba(0, 0, 0, 0.8)'}>
        <Box component={'img'} src={HomeBg} className={classes.homeBanner} />
        <Box component={'div'} className={classes.bannerContainer}>
          <Box className={classes.flexColumn} gap={'48px'}>
            <Box className={classes.flexColumn} gap={'24px'}>
              <Typography className={classes.homeHeading} component={'h6'}>
                Lorem ispum dolar sit
              </Typography>
              <Typography variant='mediumThin' color={'#fff'}>
                There are many variations of the passages of lorem Ipsum from available, majority.
              </Typography>
            </Box>
            <Button variant='contained' color='primary' sx={{ maxWidth: '260px' }} endIcon={<ArrowForwardIcon />}>
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
              Make your skin better with{' '}
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
          <Box component={'img'} src={Better} height={'560px'} width={'100%'} className='img-contains' />
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
                  <TestimonialCards />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      {/* Deliver */}
      <Box component={'section'} width={'100%'} padding={'40px 0px 120px 0px'}>
        <Grid container height={'70vh'} width={'100%'}>
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
      <Box component={'section'} className={classes.contactBgStyles}>
        <Box component={'div'} className={classes.contactBgLayout}>
          <Box component={'div'} className={`${classes.flexColumn} ${classes.contactLayout}`}>
            <Typography className={classes.contactHeading}>Have queries? Talk to us now!</Typography>
            <Grid container lg={12} spacing={16}>
              <Grid item lg={5.5}>
                <Box component={'div'} className={`${classes.flexColumn} ${classes.contactLeftContainer}`}>
                  <Box component={'div'} gap={'24px'} padding={'60px 32px'} className={classes.flexColumn}>
                    <Box component={'div'} gap={'16px'} className={classes.flexCenter}>
                      <EmailOutlinedIcon className={classes.contactIcon} />
                      <Typography variant='smallThin' color={'#141A06'}>
                        info@yourdomain.com
                      </Typography>
                    </Box>
                    <Box component={'div'} gap={'16px'} className={classes.flexCenter}>
                      <LocalPhoneOutlinedIcon className={classes.contactIcon} />
                      <Typography variant='smallThin' color={'#141A06'}>
                        +1 (378) 400-1234
                      </Typography>
                    </Box>
                    <Box component={'div'} gap={'16px'} className={classes.flexCenter}>
                      <PublicSharpIcon className={classes.contactIcon} />
                      <Typography variant='smallThin' color={'#141A06'}>
                        www.yourdomain.com
                      </Typography>
                    </Box>
                  </Box>
                  <Box component={'div'} gap={'35px'} padding={'60px 32px'} className={classes.flexCenter}>
                    <FaFacebookF fontSize={'18px'} color='#424C23' />
                    <FaLinkedinIn fontSize={'18px'} color='#424C23' />
                    <FaInstagram fontSize={'18px'} color='#424C23' />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6.5}>
                <Box component={'form'} className={classes.flexColumn} gap={'50px'}>
                  <TextField
                    variant='standard'
                    fullWidth
                    label='Full name'
                    InputLabelProps={{
                      style: {
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#49503A',
                        paddingBottom: '16px',
                      },
                    }}
                    inputProps={{
                      style: {
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#49503A',
                        paddingBottom: '16px',
                      },
                    }}
                  />
                  <TextField
                    variant='standard'
                    fullWidth
                    label='Phone number'
                    InputLabelProps={{
                      style: {
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#49503A',
                        paddingBottom: '16px',
                      },
                    }}
                    inputProps={{
                      style: {
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#49503A',
                        paddingBottom: '16px',
                      },
                    }}
                  />
                  <TextField
                    variant='standard'
                    fullWidth
                    label='Email'
                    InputLabelProps={{
                      style: {
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#49503A',
                        paddingBottom: '16px',
                      },
                    }}
                    inputProps={{
                      style: {
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#49503A',
                        paddingBottom: '16px',
                      },
                    }}
                  />
                  <TextField
                    variant='standard'
                    rows={7}
                    multiline
                    fullWidth
                    label='Hello I would like to know about...'
                    InputLabelProps={{
                      style: {
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#49503A',
                        paddingBottom: '16px',
                      },
                    }}
                    inputProps={{
                      style: {
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#49503A',
                        paddingBottom: '16px',
                      },
                    }}
                  />
                  <Button fullWidth variant='contained' color='secondary' sx={{ padding: '9px' }}>
                    Send now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Box component={'section'} bgcolor={'#F5F8EE'}>
        <Box component={'div'} className={classes.padding100}>
          <Box component={'img'} src={logo} className={classes.logoStyles} />
          <Box component={'div'} display={'flex'} gap={'150px'}>
            <Box component={'div'} gap={'36px'} className={classes.flexColumn}>
              <Box component={'div'} gap={'12px'} className={classes.flexColumn}>
                <Typography variant='largeBold' sx={{ fontWeight: '700' }} component={'h6'} color={'#56642E'}>
                  Shop for
                </Typography>
                <Box component={'div'} sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  {shopFor.map((items, index) => {
                    return (
                      <>
                        <Typography variant='mediumThin' component={'h6'} color={'#424C23'}>
                          {items}
                        </Typography>
                        {shopFor.length - 1 !== index && <Box component={'div'} className={classes.seperator} />}
                      </>
                    );
                  })}
                </Box>
              </Box>
              <Box component={'div'} gap={'12px'} className={classes.flexColumn}>
                <Typography variant='largeBold' sx={{ fontWeight: '700' }} component={'h6'} color={'#56642E'}>
                  Useful links
                </Typography>
                <Box component={'div'} sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  {links.map((items, index) => {
                    return (
                      <>
                        <Typography
                          variant='mediumThin'
                          component={'h6'}
                          color={'#424C23'}
                          sx={{ cursor: 'pointer' }}
                          onClick={() => {
                            navigate(items.link);
                          }}>
                          {items.label}
                        </Typography>
                        {links.length - 1 !== index && <Box component={'div'} className={classes.seperator} />}
                      </>
                    );
                  })}
                </Box>
              </Box>
            </Box>
            <Box component={'div'} gap={'36px'} className={classes.flexColumn}>
              <Box component={'div'} gap={'12px'} className={classes.flexColumn}>
                <Typography variant='largeBold' sx={{ fontWeight: '700' }} component={'h6'} color={'#56642E'}>
                  Contact us
                </Typography>
                <Typography variant='mediumThin' component={'h6'} color={'#424C23'}>
                  +91 9495496623
                </Typography>
                <Typography variant='mediumThin' component={'h6'} color={'#424C23'}>
                  contact@ajilda.com
                </Typography>
              </Box>
              <Box component={'div'} gap={'12px'} className={classes.flexColumn}>
                <Typography variant='largeBold' sx={{ fontWeight: '700' }} component={'h6'} color={'#56642E'}>
                  Office address
                </Typography>
                <Typography variant='mediumThin' component={'h6'} color={'#424C23'}>
                  Ajilda head office, Tuticorin-685612
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component={'div'} borderTop={'1px solid #8EA64C'}>
          <Box component={'div'} padding={'20px 100px'}>
            <Box component={'div'} className={classes.flexCenter} gap={'10px'}>
              <Typography variant='mediumThin' color={'#424C23'} component={'h6'}>
                All rights reserved
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
