import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../styles';

const ProfileDetails = () => {
  const classes = useStyles();

  return (
    <Box component={'div'} className={classes.flexColumn} gap={'30px'}>
      <Typography variant='mediumRegular' color={'#0F1405'} component={'h6'}>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={3} md={6} sm={12}>
          <TextField variant='outlined' label={'Full name'} fullWidth />
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <TextField variant='outlined' label={'Phone number'} fullWidth />
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select label={'Gender'} fullWidth>
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Not to disclose'}>Not to disclose</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <TextField variant='outlined' label={'Email'} fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDetails;
