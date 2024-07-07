import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Divider, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { getData } from "../../utils/services";
import { CONSTANTS, collections } from "../../firebase/configs";
import { useAuthContext } from "../../context/AuthProvider";
import Loader from "../../components/Loader";
import { makeStyles } from "@mui/styles";
import { Controller, useForm, useWatch } from "react-hook-form";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { City, Country, State } from "country-state-city";
import { useSnackbarContext } from "../../context/SnackbarProvider";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../utils/routes.json";

const useStyles = makeStyles(() => ({
  inputField: {
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#56642E",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#56642E",
    },
  },
}));

const PlaceOrder = () => {
  const {
    authData: { userData, cartData },
  } = useAuthContext();
  const { dispatchSnackbarData } = useSnackbarContext();
  const classes = useStyles();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { control, getValues, setValue, reset, handleSubmit } = useForm({ mode: "onChange" });

  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const data1 = useWatch({ name: "address1", control: control });

  const proceedToCheckout = async (data) => {
    navigate(`../${routes.cart}/payment-option`, { state: { billingInformation: { ...data }, orders: products, subTotal: state?.subTotal, total: state?.total }, replace: true });
  };

  useEffect(() => {
    if (!state?.total && typeof state?.total !== "number" && state?.total <= 0) {
      navigate(-1);
    }
  }, [state?.total, navigate]);

  useEffect(() => {
    const getProfileData = async () => {
      await getData(collections.PROFILE, userData.uid)
        .then((res) => {
          if ((res || []).length > 0) {
            reset(res[0]);
            setLoader(false);
          }
        })
        .catch((err) => {
          dispatchSnackbarData({ action: "UPDATE", payload: { open: true, message: "Something went wrong!", severity: "error" } });
          setLoader(false);
        });
    };
    if (userData?.uid) {
      setLoader(true);
      getProfileData();
    }
  }, [userData?.uid]);

  useEffect(() => {
    const getCarts = async () => {
      const carts = [];
      setLoader(true);
      const orders = cartData;
      const products = await getData(collections.PRODUCTS);

      if (orders.length > 0 && products.length > 0) {
        for (let i = 0; i < orders.length; i++) {
          const orderData = orders[i];
          for (let j = 0; j < products.length; j++) {
            const productData = products[j];
            if (orderData?.product === productData?.info?.id) {
              carts.push({
                orderInfo: orderData?.info,
                productInfo: productData?.info,
                quantity: orderData?.quantity,
                name: productData?.product?.name,
                price: parseInt(productData?.product?.price?.newprice) * parseInt(orderData?.quantity),
                image: productData?.product?.image[0],
              });
            }
          }
        }
      }
      setProducts(carts);
      setLoader(false);
    };

    getCarts();
  }, [userData, cartData]);

  useEffect(() => {
    const countryName = getValues("address1[country]");
    const country = Country.getAllCountries().find((item) => item.name === countryName);
    if (country) {
      const states = State.getStatesOfCountry(country.isoCode);
      if (states.length === 0) {
        setValue(`address1[state]`, null);
        setValue(`address1[city]`, null);
      }
      setStates(states);
    }
  }, [data1?.country]);

  useEffect(() => {
    const countryName = getValues(`address1[country]`);
    const stateKey = getValues("address1[state]");
    const country = Country.getAllCountries().find((item) => item.name === countryName);
    const state = State.getAllStates().find((items) => items.name === stateKey);
    if (country?.isoCode && state?.isoCode) {
      const city = City.getCitiesOfState(country?.isoCode, state?.isoCode);
      setCities(city);
      if (city.length === 0) {
        setValue(`address1[city]`, null);
      }
    }
  }, [data1?.country, data1?.state]);

  return (
    <>
      {loader && <Loader />}
      <Grid container component={"form"} onSubmit={handleSubmit(proceedToCheckout)} sx={{ padding: "10px 80px" }} spacing={2}>
        <Grid item md={7}>
          <h4>Contact</h4>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "This field is required",
              pattern: {
                value: CONSTANTS.EMAIL_VALIDATION,
                message: "Please enter a valid email",
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return <TextField label="Email ID" InputLabelProps={{ shrink: true }} variant="outlined" fullWidth className={classes.inputField} {...field} helperText={error?.message} error={error?.message} />;
            }}
          />
          <h4 style={{ marginTop: "60px" }}>Billing Information</h4>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Controller
                name="fullName"
                control={control}
                rules={{
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "Full name should be greater than 10 characters",
                  },
                  maxLength: {
                    value: 40,
                    message: "Full name should be lesser than 40 characters",
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return <TextField InputLabelProps={{ shrink: true }} label="Full Name" variant="outlined" fullWidth className={classes.inputField} {...field} helperText={error?.message} error={error?.message} />;
                }}
              />
            </Grid>
            <Grid item md={4}>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: "Field is required",
                  validate: (value) => {
                    return matchIsValidTel(value) || "Please enter a valid phone number";
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return <MuiTelInput defaultCountry={"IN"} label={"Phone number"} {...field} style={{ width: "100%" }} helperText={error?.message} error={error?.message} />;
                }}
              />
            </Grid>
            <Grid item md={4}>
              <Controller
                name="address1[country]"
                control={control}
                rules={{
                  required: "This field is required",
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <FormControl fullWidth error={error?.message}>
                      <InputLabel className={classes.inputLabel}>Country</InputLabel>
                      <Select label={"Country"} fullWidth {...field}>
                        {Country.getAllCountries().map((items) => {
                          return (
                            <MenuItem style={{ textWrap: "wrap" }} value={items.name}>
                              {items.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {error?.message && <FormHelperText>{error?.message}</FormHelperText>}
                    </FormControl>
                  );
                }}
              />
            </Grid>
            {states.length > 0 && (
              <Grid item md={4}>
                <Controller
                  name={`address1[state]`}
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <FormControl fullWidth error={error?.message}>
                        <InputLabel className={classes.inputLabel}>State</InputLabel>
                        <Select label={"State"} fullWidth {...field}>
                          {states.map((items) => {
                            return (
                              <MenuItem style={{ textWrap: "wrap" }} value={items.name}>
                                {items.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {error?.message && <FormHelperText>{error?.message}</FormHelperText>}
                      </FormControl>
                    );
                  }}
                />
              </Grid>
            )}
            {cities.length > 0 && (
              <Grid item md={4}>
                <Controller
                  name={`address1[city]`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel className={classes.inputLabel}>City</InputLabel>
                        <Select label={"City"} fullWidth {...field}>
                          {cities.map((items) => {
                            return (
                              <MenuItem style={{ textWrap: "wrap" }} value={items.name}>
                                {items.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    );
                  }}
                />
              </Grid>
            )}
            <Grid item md={4}>
              <Controller
                name="address1[zipCode]"
                control={control}
                rules={{
                  required: "This field is required",
                  minLength: {
                    value: 4,
                    message: "Zipcode should be greater than 3 characters",
                  },
                  maxLength: {
                    value: 7,
                    message: "Zipcode should be lesser than 8 characters",
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return <TextField InputLabelProps={{ shrink: true }} label="Zip Code" variant="outlined" fullWidth className={classes.inputField} {...field} helperText={error?.message} error={error?.message} />;
                }}
              />
            </Grid>
            <Grid item md={12}>
              <Controller
                name="address1[details]"
                control={control}
                rules={{
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "This field should not be lesser than 10 characters",
                  },
                  maxLength: {
                    value: 60,
                    message: "This field should not be greater than 60 characters",
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return <TextField InputLabelProps={{ shrink: true }} label="Address" variant="outlined" fullWidth className={classes.inputField} {...field} helperText={error?.message} error={error?.message} />;
                }}
              />
            </Grid>
          </Grid>
          <Controller
            name="save"
            control={control}
            render={({ field }) => {
              return (
                <FormGroup sx={{ marginTop: "20px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "#56642E",
                          "&.Mui-checked": {
                            color: "#56642E",
                          },
                        }}
                        {...field}
                      />
                    }
                    label="Save this information for next time"
                  />
                </FormGroup>
              );
            }}
          />
        </Grid>
        <Grid item md={5}>
          <div
            style={{
              border: "1px solid #E8E8E8",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <h4 style={{ padding: "0px 0px 0px 30px" }}>Order Summary</h4>
            <Divider variant="middle" />
            {products.map((product, index) => (
              <Grid key={index} container>
                <Grid
                  item
                  md={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={product.image} alt={`purchased product ${index}`} width="60px" height="60px" style={{ borderRadius: "10px" }} />
                </Grid>
                <Grid item md={9}>
                  <h4>{product.name}</h4>
                  <h4>
                    {product.price} x <span style={{ color: "#56642E", marginLeft: "2px" }}>$ 299</span>
                  </h4>
                </Grid>
              </Grid>
            ))}
            <Divider variant="middle" />
            <div style={{ padding: "10px 30px" }}>
              <Grid container>
                <Grid item md={8}>
                  <h4 style={{ fontWeight: "300" }}>Subtotal</h4>
                  <h4 style={{ fontWeight: "300" }}>Shipping</h4>
                  <h4 style={{ fontWeight: "300" }}>Discount</h4>
                  <h4 style={{ fontWeight: "300" }}>Tax</h4>
                </Grid>
                <Grid item md={4} sx={{ textAlign: "end" }}>
                  <h4>{state?.subTotal || 0}</h4>
                  <h4>free</h4>
                  <h4>0</h4>
                  <h4>0</h4>
                </Grid>
              </Grid>
              <Divider />
              <Grid container>
                <Grid item md={8}>
                  <h4>Total</h4>
                </Grid>
                <Grid item md={4} sx={{ textAlign: "end" }}>
                  <h4>{state?.total || 0}</h4>
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" fullWidth style={{ margin: "20px 0px" }}>
                Place Order &nbsp;
                <EastIcon />
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default PlaceOrder;
