import { Box, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Success from '../../asset/Icons/successCircle.png';
import { makeStyles, styled } from '@mui/styles';
import Testimonial1 from "../../asset/PNG's/Testimonials.png";
import Testimonial2 from '../../asset/Images/testimonial2.png';
import Testimonial3 from '../../asset/Images/testimonial3.png';

const useStyles = makeStyles(() => ({
  cardBody: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    position: 'absolute',
    bottom: '18px',
    left: '24px',
    zIndex: '0',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: '22px !important',
    fontWeight: '600 !important',
    color: '#FFFFFF !important',
  },
  seperator: {
    height: '16px',
    width: '1px',
    background: '#8C8C8C',
  },
  container: {
    position: 'relative',
    height: '420px',
    width: 'auto',
  },
  contentConatiner: {
    position: 'absolute',
    background: `#fff`,
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    border: '2px solid rgba(0, 0, 0, 0.2)',
    left: '-400px',
    opacity: '0',
    zIndex: '-1',
    top: '0px',
  },
  contentConatinerLayout: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '60px',
    maxHeight: '420px',
    padding: '0px 26px',
    marginTop: '30px',
    width: 'auto',
  },
}));

const TestimonialCards = (props) => {
  const { index } = props;
  const classes = useStyles();

  const testimonialList = [
    {
      name: 'Christina Smith',
      rating: '4.5',
      image: Testimonial2,
    },
    {
      name: 'Vedhika',
      rating: '4.5',
      image: Testimonial1,
    },
    {
      name: 'Dhanush',
      rating: '4.5',
      image: Testimonial3,
    },
  ];

  const CustomContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '420px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'inset 0rem -14rem 7rem -7rem rgba(0, 0, 0, 0.6)',
    borderRadius: '12px',
    background: `url(${testimonialList[index].image})`,
  }));

  return (
    <Box component={'div'} className={`${classes.container} hover-testimonial cursor-pointer`} zIndex={`${index === 0 ? 3 : index === 1 ? 2 : 1}`}>
      <CustomContainer component={'div'}>
        <Box component={'div'} className={classes.cardBody}>
          <Typography className={classes.cardTitle} component={'h6'}>
            {testimonialList[index].name}
          </Typography>
          <StarIcon sx={{ color: '#FFC300', height: '22px' }} />
          <Typography component={'label'} variant='mediumRegular' color={'#FFFFFF'}>
            {testimonialList[index].rating}
          </Typography>
          <Box component={'div'} className={classes.seperator} />
          <Box component={'img'} height={'22px'} width={'auto'} src={Success} className='img-contains' />
        </Box>
      </CustomContainer>
      <Box component={'div'} className={`${classes.contentConatiner} hover-content`}>
        <Box component={'div'} className={classes.contentConatinerLayout}>
          <Box component={'div'} className={classes.flexColumn} gap={'12px'}>
            <Typography variant='largeExtraBold' component={'h6'} color={'#0F1405'}>
              Super effective products
            </Typography>
            <Typography variant='smallThin' component={'h6'} color={'#0F1405'} lineHeight={'1.5rem'}>
              “I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!” I'm really impressed with the uptime and support.
              The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”
            </Typography>
          </Box>
          <Box component={'div'} className={classes.flexCenter} width={'100%'} justifyContent={'space-between'} marginBottom={'50px'}>
            <Box component={'div'} className={classes.flexCenter} gap={'8px'}>
              <StarIcon sx={{ color: '#FFC300', height: '18px' }} />
              <Typography component={'label'} variant='mediumRegular' color={'#0F1405'}>
                {testimonialList[index].rating}
              </Typography>
            </Box>
            <Typography variant='smallRegular' color={'#0F1405'} component={'h6'}>
              12, July 2024
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCards;
