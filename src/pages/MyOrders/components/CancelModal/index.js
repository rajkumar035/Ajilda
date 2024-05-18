import React from 'react';
import { useStyles } from '../../styles';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CancelModal = () => {
  const classes = useStyles();
  const reason = ['Found this product at a better price', 'Item no longer needed', 'Ordered by mistake', 'Delivery taking too long'];

  return (
    <Box component={'div'} className={classes.flexColumn} gap={'24px'}>
      <Box component={'div'} className={classes.flexColumn} gap={'12px'}>
        <Typography variant='largeExtraBold' component={'h6'} color={'#0F1405'}>
          Reason for cancellation
        </Typography>
        <Typography variant='smallThin' component={'h6'} color={'#676C5A'}>
          Please let us know why you would like to cancel!
        </Typography>
      </Box>
      <Box component={'div'} className={classes.flexColumn} width={'100%'}>
        {reason.map((items, index) => {
          return (
            <Box component={'div'} padding={'10px 0px'} className={classes.flexCenter} justifyContent={'space-between'} borderBottom={reason.length === index + 1 ? 'none' : '1px solid #E8E8E8'} key={index}>
              <Typography variant='mediumThin' component={'h6'} color={'#0F1405'}>
                {items}
              </Typography>
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CancelModal;
