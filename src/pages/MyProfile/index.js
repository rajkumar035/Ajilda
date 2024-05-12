import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../components/Header';
import { useStyles } from './styles';
import DeliveryAddress from './components/DeliveryAddress';
import ProfileDetails from './components/ProfileDetails';
import MyOrders from '../MyOrders';

const Profile = () => {
  const classes = useStyles();
  const TabStates = {
    Profile: 'Profile',
    Orders: 'Orders',
    Address: 'Address',
  };
  const [tabState, setTabState] = useState(TabStates.Profile);

  const handleTabState = (value) => {
    setTabState(value);
  };

  const CustomTab = ({ value, children }) => {
    const condition = value === tabState;
    return (
      <Typography
        component={'h6'}
        variant={condition ? 'mediumExtraBold' : 'mediumThin'}
        color={condition ? '#6F813C' : '#979A8E'}
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          handleTabState(value);
        }}>
        {children}
      </Typography>
    );
  };

  const MainTab = () => {
    switch (tabState) {
      case TabStates.Profile:
        return <ProfileDetails />;
      case TabStates.Orders:
        return <MyOrders />;
      case TabStates.Address:
        return <DeliveryAddress />;
      default:
        return null;
    }
  };

  return (
    <Box component={'article'}>
      {/* Header */}
      <Header />

      {/* Main Section */}
      <Box component={'section'} padding={'50px 125px'}>
        <Grid container>
          <Grid item lg={2}>
            <Box component={'div'} className={classes.flexColumn} gap={'40px'} padding={'30px 0px'}>
              <Box component={'div'} className={classes.flexColumn} gap={'12px'}>
                <Typography variant='mediumExtraBold' component={'h6'} color={'#0F1405'}>
                  My Profile
                </Typography>
                <Box component={'div'} className={classes.tabHeaderFooter} />
              </Box>
              <CustomTab value={TabStates.Profile}>ProfileDetails</CustomTab>
              <CustomTab value={TabStates.Orders}>My Order</CustomTab>
              <CustomTab value={TabStates.Address}>Delivery Address</CustomTab>
            </Box>
          </Grid>
          <Grid item lg={10}>
            <Box component={'div'} className={classes.tabContainer}>
              <MainTab />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
