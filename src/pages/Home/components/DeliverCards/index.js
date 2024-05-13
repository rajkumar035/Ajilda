import { Box, Typography } from '@mui/material';
import React from 'react';
import Testimonial from "../../../../assets/PNG's/Testimonials.png";
import { useStyles } from '../../styles';
import { styled } from '@mui/styles';

const DeliverCards = () => {
  const classes = useStyles();

  const Customcontainer = styled(Box)({
    background: `url(${Testimonial})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  });

  return (
    <Customcontainer>
      <Box component={'div'} className={`${classes.deliveryCardContainerLayout} ${classes.flexColumn}`}>
        <Typography component={'h6'} className={classes.deliveryCardContainerText}>
          Malaysia
        </Typography>
      </Box>
    </Customcontainer>
  );
};

export default DeliverCards;
