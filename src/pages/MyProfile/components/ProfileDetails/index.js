import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../styles';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { UseUserContext } from '../../../../context/GoogleAuthProvider';

const ProfileDetails = () => {
  const classes = useStyles();
  const data = UseUserContext();

  const { control } = useForm({
    defaultValues: {
      fullName: data?.displayName,
      phoneNumber: data?.phoneNumber,
      gender: '',
      email: data?.email,
    },
    mode: 'onChange',
  });

  return (
    <Box component={'div'} className={classes.flexColumn} gap={'30px'}>
      <Typography variant='mediumRegular' color={'#0F1405'} component={'h6'}>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={3} md={6} sm={12}>
          <Controller
            name='fullName'
            control={control}
            render={({ field }) => {
              return <TextField variant='outlined' label={'Full name'} fullWidth {...field} />;
            }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Controller
            name='phoneNumber'
            control={control}
            render={({ field }) => {
              return <TextField variant='outlined' label={'Phone number'} fullWidth {...field} />;
            }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Controller
            name='gender'
            control={control}
            render={({ field }) => {
              return (
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select label={'Gender'} fullWidth {...field}>
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Not to disclose'}>Not to disclose</MenuItem>
                  </Select>
                </FormControl>
              );
            }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Controller
            name='email'
            control={control}
            render={({ field }) => {
              return <TextField variant='outlined' label={'Email'} value={field.value} fullWidth />;
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDetails;
