import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../../styles";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { City, Country, State } from "country-state-city";

const DeliveryAddress = () => {
  const classes = useStyles();
  const { control, getValues, setValue } = useFormContext();
  const countryKeys = ["address1[country]", "address2[country]"];
  const stateKeys = ["address1[state]", "address2[state]"];

  const data1 = useWatch({ name: "address1", control: control });
  const data2 = useWatch({ name: "address2", control: control });

  const [states, setStates] = useState({});
  const [cities, setCities] = useState({});

  // Set States
  useEffect(() => {
    countryKeys.forEach((keys, index) => {
      const countryName = getValues(keys);
      const country = Country.getAllCountries().find((item) => item.name === countryName);
      if (country) {
        const states = State.getStatesOfCountry(country.isoCode);
        if (states.length === 0) {
          setValue(`address${index + 1}[state]`, null);
          setValue(`address${index + 1}[city]`, null);
        }
        setStates((prevStates) => ({
          ...prevStates,
          [`state${index + 1}`]: states,
        }));
      }
    });
  }, [data1?.country, data2?.country]);

  // Set Cities
  useEffect(() => {
    stateKeys.forEach((keys, index) => {
      const countryName = getValues(`address${index + 1}[country]`);
      const stateKey = getValues(keys);
      const country = Country.getAllCountries().find((item) => item.name === countryName);
      const state = State.getAllStates().find((items) => items.name === stateKey);
      if (country?.isoCode && state?.isoCode) {
        const city = City.getCitiesOfState(country?.isoCode, state?.isoCode);
        setCities((prevStates) => ({ ...prevStates, [`city${index + 1}`]: city }));
        if (city.length === 0) {
          setValue(`address${index + 1}[city]`, null);
        }
      }
    });
  }, [data1?.country, data2?.country, data1?.state, data2?.state]);

  return (
    <Box component={"div"} className={classes.flexColumn} gap={"40px"}>
      {[1, 2].map((items, index) => {
        return (
          <Box component={"div"} className={classes.flexColumn} gap={"30px"} key={items}>
            <Typography variant="mediumRegular" color={"#0F1405"} component={"h6"}>
              Address{index + 1}
            </Typography>
            <Grid container spacing={3}>              
              <Grid item lg={3} md={6} sm={12}>
                <Controller
                  name={`address${items}[country]`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
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
                      </FormControl>
                    );
                  }}
                />
              </Grid>
              {(states[`state${items}`] || []).length > 0 && (
                <Grid item lg={3} md={6} sm={12}>
                  <Controller
                    name={`address${items}[state]`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <FormControl fullWidth>
                          <InputLabel className={classes.inputLabel}>State</InputLabel>
                          <Select label={"State"} fullWidth {...field}>
                            {(states[`state${items}`] || []).map((items) => {
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
              {(cities[`city${items}`] || []).length > 0 && (
                <Grid item lg={3} md={6} sm={12}>
                  <Controller
                    name={`address${items}[city]`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <FormControl fullWidth>
                          <InputLabel className={classes.inputLabel}>City</InputLabel>
                          <Select label={"City"} fullWidth {...field}>
                            {(cities[`city${items}`] || []).map((items) => {
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
              <Grid item lg={3} md={6} sm={12}>
                <Controller
                  name={`address${items}[zipCode]`}
                  control={control}
                  rules={{
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
                    return <TextField variant="outlined" label={"Zip code"} InputLabelProps={{ className: classes.inputLabel }} fullWidth {...field} helperText={error?.message} error={error?.message} />;
                  }}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12}>
                <Controller
                  name={`address${items}[details]`}
                  control={control}
                  rules={{
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
                    return <TextField variant="outlined" label={"Address"} InputLabelProps={{ className: classes.inputLabel }} fullWidth {...field} error={error?.message} helperText={error?.message} />;
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default DeliveryAddress;
