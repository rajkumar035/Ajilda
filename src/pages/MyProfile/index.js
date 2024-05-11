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
      <Box component={'section'} sx={{ padding: '80px 100px' }}>
        <Grid container>
          <Grid item lg={2}>
            <Box component={'div'} className={classes.flexColumn} gap={'40px'}>
              <Box component={'div'} className={classes.flexColumn} gap={'12px'}>
                <Typography variant='mediumExtraBold' component={'h6'} color={'#0F1405'}>
                  My Profile
                </Typography>
                <Box component={'div'} sx={{ height: '4px', width: '24px', background: '#6F813C' }} />
              </Box>
              <CustomTab value={TabStates.Profile}>ProfileDetails</CustomTab>
              <CustomTab value={TabStates.Orders}>My Order</CustomTab>
              <CustomTab value={TabStates.Address}>Delivery Address</CustomTab>
            </Box>
          </Grid>
          <Grid item lg={10}>
            <Box component={'div'} paddingLeft={'80px'} borderLeft={'1px solid #E8E8E8'}>
              <MainTab />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
