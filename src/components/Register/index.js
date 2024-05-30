import { Box, Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { Controller, useForm } from 'react-hook-form';

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
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '2px solid #56642E',
        borderRadius: '12px',
      },
      '&:hover fieldset': {
        border: '2px solid #56642E',
        borderRadius: '12px',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #56642E',
        borderRadius: '12px',
      },
    },
  },
  unSelectedCell: {
    border: '2px solid #B5B5B5',
    background: 'transparent',
  },
  selectCell: {
    border: '1px solid #56642E',
    background: '#BDCE8C',
  },
  cells: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    alignItems: 'center',
    borderRadius: '12px',
    cursor: 'pointer',
  },
}));

const Register = (props) => {
  const { handleUserRegistration } = props;
  const classes = useStyles();
  const method = useForm({ mode: 'onChange' });

  const [gender, setGender] = useState('');

  const handleGender = (items) => {
    setGender(items);
  };

  const handleFormSubmit = async (data) => {
    await handleUserRegistration({ ...data, gender });
  };

  return (
    <Box
      component={'form'}
      onSubmit={method.handleSubmit(async (data) => {
        await handleFormSubmit(data);
      })}
      className={classes.flexColumn}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'40px'}
      width={'100%'}>
      <Box component={'div'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'8px'}>
        <Typography variant='largeExtraBold' color={'#0F1405'} component={'h6'}>
          Hey there 👋🏻
        </Typography>
        <Typography variant='smallThin' color={'#676C5A'} component={'h6'}>
          Help us customize your experience
        </Typography>
      </Box>
      <Box component={'div'} className={classes.flexColumn} alignItems={'center'} justifyContent={'center'} gap={'18px'} width={'100%'}>
        <Controller
          name='fullName'
          control={method.control}
          rules={{
            required: 'This field is required',
            minLength: {
              value: 10,
              message: 'Full name should be greater than 10 characters',
            },
            maxLength: {
              value: 40,
              message: 'Full name should be lesser than 40 characters',
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return <TextField InputLabelProps={{ style: { color: '#56642E' } }} fullWidth label={'Full name'} className={classes.inputStyles} {...field} helperText={error?.message} error={error?.message} />;
          }}
        />
        <Controller
          name='phoneNumber'
          control={method.control}
          rules={{
            required: 'This field is required',
          }}
          render={({ field, fieldState: { error } }) => {
            return <TextField InputLabelProps={{ style: { color: '#56642E' } }} fullWidth label={'Phone number'} className={classes.inputStyles} {...field} helperText={error?.message} error={error?.message} />;
          }}
        />
        <Box component={'div'} className={classes.flexCenter} justifyContent={'space-between'} gap={'16px'} width={'100%'}>
          <Box
            component={'div'}
            className={`${classes.cells} ${gender === 'Male' ? classes.selectCell : classes.unSelectedCell}`}
            padding={'11px 14px'}
            onClick={() => {
              handleGender('Male');
            }}>
            <MaleIcon fontSize='medium' color='#0F1405' />
            <Typography variant='smallRegular' color={'#0F1405'} component={'h6'}>
              Male
            </Typography>
          </Box>
          <Box
            component={'div'}
            className={`${classes.cells} ${gender === 'Female' ? classes.selectCell : classes.unSelectedCell}`}
            padding={'11px 14px'}
            onClick={() => {
              handleGender('Female');
            }}>
            <FemaleIcon fontSize='medium' color='#0F1405' />
            <Typography variant='smallRegular' color={'#0F1405'} component={'h6'}>
              Female
            </Typography>
          </Box>
          <Box
            component={'div'}
            className={`${classes.cells} ${gender === 'Others' ? classes.selectCell : classes.unSelectedCell}`}
            padding={'14px'}
            onClick={() => {
              handleGender('Others');
            }}>
            <Typography variant='smallRegular' color={'#0F1405'} component={'h6'}>
              Others
            </Typography>
          </Box>
        </Box>
        <div id='recaptcha' style={{ margin: '10px auto', width: '100%' }} />
      </Box>
      <Button disabled={gender === ''} variant='contained' type='submit' color='primary' fullWidth>
        Continue
      </Button>
    </Box>
  );
};

export default Register;
