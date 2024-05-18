import React from 'react';
import { tabStateLabel } from '../..';
import { useStyles } from '../../styles';
import { Box, Button, Typography } from '@mui/material';

const OrderAction = (props) => {
  const { mode, handleCancelModal, handleExchangeModal } = props;
  const classes = useStyles();

  switch (mode) {
    case tabStateLabel[0]:
      return (
        <Box component={'div'} className={`${classes.flexColumn} ${classes.actionContainer}`}>
          <Button
            variant='contained'
            color='success'
            className='custom-btn'
            fullWidth
            onClick={() => {
              handleCancelModal();
            }}>
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
            <Button
              variant='contained'
              color='info'
              fullWidth
              className='custom-btn'
              onClick={() => {
                handleExchangeModal();
              }}>
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

export default OrderAction;
