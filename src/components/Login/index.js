import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import logo2 from '../../asset/Icons/logo2.png';
import google from '../../asset/Icons/google.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputStyles: {
    '& .MuiTextField-root': {
      fontSize: '16px',
      fontWeight: '400',
      color: '#0F1405',
      borderRadius: '12px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#56642E',
      },
      '&:hover fieldset': {
        borderColor: '#56642E',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#56642E',
      },
    },
  },
}));

const Login = (props) => {
  const { handleSignIn, sendOtp } = props;
  const classes = useStyles();

  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Box component={'div'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'50px'} width={'100%'}>
      <Box component={'div'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'8px'}>
        <Box component={'img'} src={logo2} height={'50px'} width={'auto'} />
        <Typography variant='smallThin' color={'#192108'} component={'h6'}>
          Enter phone number to send one time password
        </Typography>
      </Box>
      <Box component={'div'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'16px'} width={'100%'}>
        <Box component={'form'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'16px'} width={'100%'}>
          <TextField
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            InputLabelProps={{ style: { color: '#56642E' } }}
            fullWidth
            label={'Email or Phone'}
            className={classes.inputStyles}
          />
          <div id='recaptcha' style={{ margin: '10px auto', width: '100%' }} />
          <Button
            variant='contained'
            onClick={() => {
              sendOtp(phoneNumber);
            }}
            color='primary'
            fullWidth>
            Request OTP
          </Button>
        </Box>
        <Typography variant='extraSmallThin' component={'h6'} color={'#0F1405'}>
          or
        </Typography>
        <Box
          component={'div'}
          className={`cursor-pointer ${classes.flexCenter}`}
          justifyContent={'center'}
          gap={'10px'}
          onClick={() => {
            handleSignIn();
          }}>
          <Box component={'img'} src={google} height={'18px'} width={'auto'} />
          <Typography variant='smallRegular' component={'h6'} color={'#56642E'}>
            Signup with gmail
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
