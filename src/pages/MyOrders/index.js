import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import OrderCards from "./components/OrderCards";
import { useStyles } from "./styles";
import { useAuthContext } from "../../context/AuthProvider";
import { ORDER_STATUS, collections } from "../../firebase/configs";
import { getData } from "../../utils/services";

export const tabStateLabel = {
  0: "Active",
  1: "Completed",
  2: "Cancelled",
};

export const MyOrdersComponent = () => {
  const classes = useStyles();
  const {
    authData: { orderData },
  } = useAuthContext();

  const [tabState, setTabState] = useState(0);
  const [ordersData, setOrdersData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const handleTabState = (index) => {
    setTabState(index);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  useEffect(() => {
    const getProductsData = async () => {
      const data = await getData(collections.PRODUCTS);
      setProductsData(data);
    };

    getProductsData();
  }, [tabState]);

  useEffect(() => {
    const setStatus = {
      0: ORDER_STATUS.ORDERED,
      1: ORDER_STATUS.DELIVERED,
      2: ORDER_STATUS.CANCELLED,
    };
    if (productsData.length > 0) {
      setOrdersData(
        orderData.filter((items) => {
          const getProducts = productsData.find((products) => {
            return products.info.id === items.product;
          });
          items["productDetails"] = getProducts;
          if (
            items.status === ORDER_STATUS.EXCHANGE &&
            setStatus[tabState] === ORDER_STATUS.DELIVERED
          ) {
            return items;
          } else {
            return items.status === setStatus[tabState];
          }
        })
      );
    }
  }, [tabState, orderData, productsData]);

  return (
    <>
      <Box component={"div"} className={classes.flexColumn} gap={"20px"}>
        <Tabs
          value={tabState}
          classes={{ indicator: classes.tabsActive }}
          onChange={(e, v) => {
            handleTabState(v);
          }}
        >
          <Tab
            className={classes.tabs}
            label={tabStateLabel[0]}
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tabs}
            label={tabStateLabel[1]}
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tabs}
            label={tabStateLabel[2]}
            {...a11yProps(2)}
          />
        </Tabs>
        <Box component={"div"}>
          {ordersData.map((items, index) => {
            return (
              <OrderCards
                mode={tabStateLabel[tabState]}
                navigateState={tabState !== 2}
                key={index}
                data={items}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

const MyOrders = () => {
  return (
    <Box component={"section"} padding={"30px 100px"}>
      <MyOrdersComponent />
    </Box>
  );
};

export default MyOrders;
