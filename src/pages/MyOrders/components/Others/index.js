import React from 'react';
import { tabStateLabel } from '../..';
import { Typography } from '@mui/material';

const GetStatus = (props) => {
  const { mode } = props;
  switch (mode) {
    case tabStateLabel[0]:
      return (
        <Typography variant='mediumExtraBold' color={'#A67829'} component={'h6'}>
          In-Transit
        </Typography>
      );
    case tabStateLabel[1]:
      return (
        <Typography variant='mediumExtraBold' color={'#6F813C'} component={'h6'}>
          Delivered
        </Typography>
      );
    case tabStateLabel[2]:
      return (
        <Typography variant='mediumExtraBold' color={'#C02B2B'} component={'h6'}>
          Cancelled
        </Typography>
      );
    default:
      break;
  }
};

export default GetStatus;
