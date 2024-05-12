import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../styles';

const DeliveryAddress = () => {
  const classes = useStyles();
  return (
    <Box component={'div'} className={classes.flexColumn} gap={'40px'}>
      {[1, 2].map((items, index) => {
        return (
          <Box component={'div'} className={classes.flexColumn} gap={'30px'} key={items}>
            <Typography variant='mediumRegular' color={'#0F1405'} component={'h6'}>
              Address{index + 1}
            </Typography>
            <Grid container spacing={3}>
              <Grid item lg={3} md={6} sm={12}>
                <TextField variant='outlined' label={'Phone number'} fullWidth />
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
                <TextField variant='outlined' label={'Email'} fullWidth />
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
                <TextField variant='outlined' label={'Zip code'} fullWidth />
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select label={'Gender'} fullWidth>
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Not to disclose'}>Not to disclose</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
                <FormControl fullWidth>
                  <InputLabel>City</InputLabel>
                  <Select label={'Gender'} fullWidth>
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Not to disclose'}>Not to disclose</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={9} md={6} sm={12}>
                <TextField variant='outlined' label={'Address'} fullWidth />
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default DeliveryAddress;
