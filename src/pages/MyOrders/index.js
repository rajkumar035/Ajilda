import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import OrderCards from './components/OrderCards';
import { useStyles } from './styles';

export const tabStateLabel = {
  0: 'Active',
  1: 'Completed',
  2: 'Cancelled',
};

export const MyOrdersComponent = () => {
  const classes = useStyles();

  const [tabState, setTabState] = useState(0);

  const handleTabState = (index) => {
    setTabState(index);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Box component={'div'} className={classes.flexColumn} gap={'20px'}>
        <Tabs
          value={tabState}
          classes={{ indicator: classes.tabsActive }}
          onChange={(e, v) => {
            handleTabState(v);
          }}>
          <Tab className={classes.tabs} label={tabStateLabel[0]} {...a11yProps(0)} />
          <Tab className={classes.tabs} label={tabStateLabel[1]} {...a11yProps(1)} />
          <Tab className={classes.tabs} label={tabStateLabel[2]} {...a11yProps(2)} />
        </Tabs>
        <Box component={'div'}>
          {[1, 2, 3, 4, 5, 6, 7].map((items, index) => {
            return <OrderCards mode={tabStateLabel[tabState]} key={index} />;
          })}
        </Box>
      </Box>
    </>
  );
};

const MyOrders = () => {
  return (
    <Box component={'section'} padding={'30px 100px'}>
      <MyOrdersComponent />
    </Box>
  );
};

export default MyOrders;
