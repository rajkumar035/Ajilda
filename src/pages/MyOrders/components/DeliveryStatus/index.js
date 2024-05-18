import React from 'react';
import { tabStateLabel } from '../..';
import { Box, Rating, Typography } from '@mui/material';
import { useStyles } from '../../styles';

const DeliveryStatus = (props) => {
  const { mode } = props;
  const classes = useStyles();

  switch (mode) {
    case tabStateLabel[0]:
      return (
        <Box component={'div'} className={classes.flexColumn} gap={'18px'}>
          <Typography component={'h6'} variant='mediumThin' color={'#6B6B6B'}>
            Delivery expected by
          </Typography>
          <Typography component={'h6'} variant='mediumExtraBold' color={'#192108'}>
            2nd June 2024
          </Typography>
        </Box>
      );
    case tabStateLabel[1]:
      return (
        <Box component={'div'} className={classes.flexColumn} gap={'18px'}>
          <Rating defaultValue={4} readOnly />
          <Typography component={'h6'} variant='mediumExtraBold' color={'#192108'}>
            Write a review
          </Typography>
        </Box>
      );
    case tabStateLabel[2]:
      return null;
    default:
      break;
  }
};

export default DeliveryStatus;
