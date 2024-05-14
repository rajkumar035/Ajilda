import { Box, Typography } from '@mui/material';
import React from 'react';
import Testimonial from "../../../../assets/PNG's/Testimonials.png";
import { useStyles } from '../../styles';
import { styled } from '@mui/styles';
import flag from "../../../../assets/PNG's/flag.png";

const DeliverCards = () => {
  const classes = useStyles();

  const Customcontainer = styled(Box)({
    background: `url(${Testimonial})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
  });

  return (
    <Customcontainer className='deliveryCardContainer'>
      <Box component={'div'} className={`${classes.deliveryCardContainerLayout} deliveryCardLayout`}>
        <Typography component={'h6'} className={`${classes.deliveryCardContainerText} deliveryCardContainerTitle`}>
          Malaysia
        </Typography>
      </Box>
      <Box component={'div'} className={`deliveryCardContainerTag ${classes.deliveryTagConatiner}`}>
        <Box component={'img'} src={flag} alt='flag' className={classes.flagTag} />
        <Typography variant='mediumRegular' component={'h6'} color={'#192108'}>
          100+ customers across Malaysia
        </Typography>
      </Box>
    </Customcontainer>
  );
};

export default DeliverCards;
