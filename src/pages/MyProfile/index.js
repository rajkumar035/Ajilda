import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import DeliveryAddress from "./components/DeliveryAddress";
import ProfileDetails from "./components/ProfileDetails";
import { MyOrdersComponent } from "../MyOrders";
import { useSearchParams } from "react-router-dom";
import { getData, updateData } from "../../utils/services";
import { collections } from "../../firebase/configs";
import { useAuthContext } from "../../context/AuthProvider";
import { useSnackbarContext } from "../../context/SnackbarProvider";
import { FormProvider, useForm } from "react-hook-form";
import Loader from "../../components/Loader";
import { removeNullKeys } from "../../utils/helperFunctions";

const Profile = () => {
  const classes = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    authData: { userData },
    dispatchAuthData,
  } = useAuthContext();
  const { dispatchSnackbarData } = useSnackbarContext();
  const getTabState = searchParams.get("state");
  const TabStates = {
    Profile: "profile",
    Orders: "orders",
    Address: "address",
  };

  const [tabState, setTabState] = useState();
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const methods = useForm({
    mode: "onChange",
  });

  const {
    reset,
    handleSubmit,
    formState: { dirtyFields },
  } = methods;

  const handleTabState = (value) => {
    setTabState(value);
    setSearchParams({ state: value });
  };

  const updateProfileDetails = async (data) => {
    const docId = data.info.id;
    const customData = { ...data };
    delete customData.info;

    if (userData?.uid) {
      setLoading(true);
      if (data?.email && dirtyFields?.email) {
        const getUserData = getData(collections.USERLIST);
        const emailExists = getUserData.filter((user) => user.email === data?.email) || [];

        if (emailExists.length > 0) {
          dispatchSnackbarData({ action: "UPDATE", payload: { open: true, message: "User already exist with the registered email", severity: "success" } });
          return;
        }

        await updateData(collections.USERLIST, customData, data.id);
      }
      const payload = removeNullKeys(customData);
      await updateData(collections.PROFILE, payload, docId, userData.uid)
        .then(() => {
          setTrigger(trigger + 1);
          dispatchSnackbarData({ action: "UPDATE", payload: { open: true, message: "User profile updated!", severity: "success" } });
          setLoading(false);
        })
        .catch(() => {
          dispatchSnackbarData({ action: "UPDATE", payload: { open: true, message: "User profile update failed!", severity: "error" } });
          setLoading(false);
        });
    } else {
      dispatchAuthData({ action: "SIGN_OUT" });
    }
  };

  useEffect(() => {
    setTabState(getTabState ? getTabState : TabStates.Profile);
  }, [getTabState]);

  useEffect(() => {
    const getProfileData = async () => {
      await getData(collections.PROFILE, userData.uid)
        .then((res) => {
          if ((res || []).length > 0) {
            reset(res[0]);
            setLoading(false);
          }
        })
        .catch((err) => {
          dispatchSnackbarData({ action: "UPDATE", payload: { open: true, message: "Something went wrong!", severity: "error" } });
          setLoading(false);
        });
    };
    if (userData?.uid) {
      setLoading(true);
      getProfileData();
    }
  }, [userData?.uid, trigger]);

  const CustomTab = ({ value, children }) => {
    const condition = value === tabState;
    return (
      <Typography
        component={"h6"}
        variant={condition ? "mediumExtraBold" : "mediumThin"}
        color={condition ? "#6F813C" : "#979A8E"}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          handleTabState(value);
        }}
      >
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
    <FormProvider {...methods}>
      {loading && <Loader />}
      <Box component={"section"} padding={"30px 100px"}>
        <Grid container>
          <Grid item lg={2}>
            <Box component={"div"} className={classes.flexColumn} gap={"40px"} padding={"30px 0px"}>
              <Box component={"div"} className={classes.flexColumn} gap={"12px"}>
                <Typography variant="mediumExtraBold" component={"h6"} color={"#0F1405"}>
                  My Profile
                </Typography>
                <Box component={"div"} className={classes.tabHeaderFooter} />
              </Box>
              <CustomTab value={TabStates.Profile}>ProfileDetails</CustomTab>
              <CustomTab value={TabStates.Orders}>My Order</CustomTab>
              <CustomTab value={TabStates.Address}>Delivery Address</CustomTab>
            </Box>
          </Grid>
          <Grid component={"form"} onSubmit={handleSubmit(updateProfileDetails)} item lg={10}>
            <Box component={"div"} className={classes.tabContainer}>
              <MainTab />
            </Box>
            {tabState !== TabStates.Orders && (
              <Box component={"div"} className={`${classes.footer} ${classes.flexCenter}`}>
                <Button
                  color="info"
                  variant="contained"
                  type="reset"
                  onClick={() => {
                    reset();
                  }}
                >
                  Cancel
                </Button>
                <Button color="primary" variant="contained" type="submit">
                  Update
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default Profile;
