import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

const useStyles = makeStyles(() => ({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const VerifyOTP = (props) => {
  const { handleLoginModal, handleVerifyModal, verifyOtp, sender } = props;
  const classes = useStyles();
  const [otp, setOtp] = useState('');

  return (
    <Box component={'div'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'50px'} width={'100%'}>
      <Box component={'div'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'8px'}>
        <Typography variant='mediumExtraBold' component={'h6'} color={'#0F1405'}>
          Verify number
        </Typography>
        <Box component={'div'} className={classes.flexCenter} gap={'12px'}>
          <Typography variant='smallThin' color={'#676C5A'} component={'h6'}>
            OTP sent to {sender}
          </Typography>
          <Typography
            className='cursor-pointer'
            variant='smallThin'
            color={'#0F1405'}
            component={'h6'}
            onClick={() => {
              handleVerifyModal();
              handleLoginModal();
            }}>
            Edit
          </Typography>
        </Box>
      </Box>
      <Box component={'div'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'40px'} width={'100%'}>
        <OTPInput
          value={otp}
          renderInput={(props) => {
            return <input {...props} />;
          }}
          onChange={(otp) => setOtp(otp)}
          numInputs={6}
          inputType='tel'
          containerStyle={{
            gap: '18px',
          }}
          inputStyle={{ borderRadius: '8px', border: '2px solid #56642E', width: '50px', height: '50px' }}
        />
        <Button
          disabled={otp.length < 6}
          onClick={() => {
            verifyOtp(otp);
          }}
          variant='contained'
          color='primary'
          fullWidth>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default VerifyOTP;
