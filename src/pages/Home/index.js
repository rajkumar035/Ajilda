import { Box, Button, Grid, Typography } from '@mui/material';
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

const Home = () => {
  const classes = useStyles();

  return (
    <Box component={'section'}>
      <Box component={'div'} position={'relative'} boxShadow={'inset 28rem -1rem 20rem -3rem rgba(0, 0, 0, 0.8)'}>
        <Box component={'img'} src={HomeBg} className={classes.homeBanner} />
        <Box component={'div'} className={classes.bannerContainer}>
          <Box className={classes.flexColumn} gap={'48px'}>
            <Box className={classes.flexColumn} gap={'24px'}>
              <Typography sx={{ fontSize: '65px', fontWeight: '400', color: '#fff', lineHeight: '5rem' }}>Lorem ispum dolar sit</Typography>
              <Typography variant='mediumThin' color={'#fff'}>
                There are many variations of the passages of lorem Ipsum from available, majority.
              </Typography>
            </Box>
            <Button variant='contained' color='primary' endIcon={<ArrowForwardIcon />}>
              Explore our products
            </Button>
          </Box>
        </Box>
      </Box>
      <Box component={'div'} position={'relative'}>
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
      <Box component={'div'} position={'relative'} style={{ padding: '80px' }}>
        <Box component={'div'} className={classes.flexColumn} gap={'50px'}>
          <Typography fontSize={'42px'} fontWeight={'600'} color={'#000'} textAlign={'center'}>
            Our Best Sellers
          </Typography>
          <Grid container lg={3} md={2} sm={1} width={'100%'} spacing={4}>
            <Grid item>
              <h6>Chre</h6>
            </Grid>
            <Grid item>
              <h6>Chre</h6>
            </Grid>
            <Grid item>
              <h6>Chre</h6>
            </Grid>
            <Grid item>
              <h6>Chre</h6>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
