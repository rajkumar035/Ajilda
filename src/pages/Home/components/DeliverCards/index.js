import { Box, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../styles';
import { styled } from '@mui/styles';
import flag from "../../../../asset/PNG's/flag.png";
import location1 from '../../../../asset/Images/location1.png';
import location2 from '../../../../asset/Images/location2.png';
import location3 from '../../../../asset/Images/location3.png';
import location4 from '../../../../asset/Images/location4.png';
import location5 from '../../../../asset/Images/location5.png';

const DeliverCards = (props) => {
  const classes = useStyles();
  const { index } = props;

  const deliveryCardList = [
    {
      country: 'Malaysia',
      label: 'Malaysia',
      image: location5,
      flagImage: flag,
    },
    {
      country: 'USA',
      label: 'USA',
      image: location4,
      flagImage: flag,
    },
    {
      country: 'India',
      label: 'We deliver across the world',
      image: location3,
      flagImage: flag,
    },
    {
      country: 'Africa',
      label: 'Africa',
      image: location2,
      flagImage: flag,
    },
    {
      country: 'Pakistan',
      label: 'Pakistan',
      image: location1,
      flagImage: flag,
    },
  ];

  const Customcontainer = styled(Box)({
    background: `url(${deliveryCardList[index].image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    filter: 'grayscale(100%)',
    width: '100%',
    position: 'relative',
  });

  return (
    <Customcontainer className='deliveryCardContainer'>
      <Box component={'div'} className={`${classes.deliveryCardContainerLayout} deliveryCardLayout`}>
        <Typography component={'h6'} className={`${classes.deliveryCardContainerText} deliveryCardContainerTitle`}>
          {deliveryCardList[index].label}
        </Typography>
      </Box>
      <Box component={'div'} className={`deliveryCardContainerTag ${classes.deliveryTagConatiner}`}>
        <Box component={'img'} src={deliveryCardList[index].flagImage} alt='flag' className={classes.flagTag} />
        <Typography variant='mediumRegular' component={'h6'} color={'#192108'}>
          100+ customers across {deliveryCardList[index].country}
        </Typography>
      </Box>
    </Customcontainer>
  );
};

export default DeliverCards;
