import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import DeliveryAddress from './components/DeliveryAddress';
import ProfileDetails from './components/ProfileDetails';
import { MyOrdersComponent } from '../MyOrders';
import { useSearchParams } from 'react-router-dom';

const Profile = () => {
  const classes = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const getTabState = searchParams.get('state');
  const TabStates = {
    Profile: 'profile',
    Orders: 'orders',
    Address: 'address',
  };

  const [tabState, setTabState] = useState();

  useEffect(() => {
    setTabState(getTabState ? getTabState : TabStates.Profile);
  }, [getTabState]);

  const handleTabState = (value) => {
    setTabState(value);
    setSearchParams({ state: value });
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
        return <MyOrdersComponent navigateLink={true} />;
      case TabStates.Address:
        return <DeliveryAddress />;
      default:
        return null;
    }
  };

  return (
    <Box component={'section'} padding={'30px 100px'}>
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
  );
};

export default Profile;
