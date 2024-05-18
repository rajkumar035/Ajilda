import { Box, Button, Rating, Typography } from '@mui/material';
import React from 'react';
import Product from '../../../../assets/Images/Product.jfif';
import { useStyles } from '../../styles';
import { tabStateLabel } from '../..';

const OrderCards = (props) => {
  const { mode } = props;
  const classes = useStyles();

  const GetStatus = ({ mode }) => {
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

  const OrderActions = ({ mode }) => {
    switch (mode) {
      case tabStateLabel[0]:
        return (
          <Box component={'div'} className={`${classes.flexColumn} ${classes.actionContainer}`}>
            <Button variant='contained' color='info' className='custom-btn' fullWidth>
              Cancel order
            </Button>
            <Typography variant='smallThin' color={'#6B6B6B'} component={'h6'}>
              (Cancel within 24 hours)
            </Typography>
          </Box>
        );
      case tabStateLabel[1]:
        return (
          <Box component={'div'} className={`${classes.flexColumn} ${classes.actionContainer}`}>
            <Box component={'div'} className={classes.flexCenter} gap={'18px'}>
              <Button variant='contained' color='info' fullWidth className='custom-btn'>
                Exchange
              </Button>
              <Button variant='contained' color='primary' fullWidth className='custom-btn'>
                Reorder
              </Button>
            </Box>
            <Typography variant='smallThin' color={'#6B6B6B'} component={'h6'}>
              Reorder to repeat your purchase
            </Typography>
          </Box>
        );
      case tabStateLabel[2]:
        return (
          <Box component={'div'} className={`${classes.flexColumn} ${classes.actionContainer}`}>
            <Button variant='contained' color='primary' fullWidth className='custom-btn' sx={{ maxWidth: '120px' }}>
              Reorder
            </Button>
            <Typography variant='smallThin' color={'#6B6B6B'} component={'h6'}>
              Reorder to repeat your purchase
            </Typography>
          </Box>
        );
      default:
        break;
    }
  };

  const GetDelivery = ({ mode }) => {
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

  return (
    <Box component={'div'} className={classes.orderCardLayout}>
      <Box component={'div'} className={classes.flexCenter} gap={'28px'}>
        <Box component={'img'} src={Product} className={classes.productImage} />
        <Box component={'div'} className={classes.flexColumn} gap={'18px'}>
          <Box component={'div'} className={classes.flexCenter} gap={'12px'}>
            <Typography variant='smallRegular' color={'#6B6B6B'} component={'h6'}>
              Order ID
            </Typography>
            <Typography variant='smallRegular' color={'#0F1405'} component={'h6'}>
              98765SRFVH1
            </Typography>
          </Box>
          <Typography variant='largeExtraBold' color={'#192108'} component={'h6'}>
            Goat milk soap
          </Typography>
          <Typography variant='smallThin' color={'#6B6B6B'} maxWidth={'250px'} component={'h6'}>
            Transformational treatments with dermo-purifying blends
          </Typography>
          <Box component={'div'} className={classes.flexCenter} gap={'36px'}>
            <Box component={'div'} className={classes.flexCenter} gap={'12px'}>
              <Typography variant='mediumRegular' color={'#6B6B6B'} component={'h6'}>
                Qty
              </Typography>
              <Typography variant='mediumRegular' color={'#0F1405'} component={'h6'}>
                2
              </Typography>
            </Box>
            <Typography variant='mediumRegular' color={'#0F1405'} component={'h6'}>
              $598
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component={'div'} className={classes.flexColumn} gap={'18px'}>
        <Typography variant='mediumThin' color={'#6B6B6B'} component={'h6'}>
          Status
        </Typography>
        <GetStatus mode={mode} />
      </Box>
      <GetDelivery mode={mode} />
      <OrderActions mode={mode} />
    </Box>
  );
};

export default OrderCards;
