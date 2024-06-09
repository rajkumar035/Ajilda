import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles";
import { Controller, useFormContext } from "react-hook-form";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { CONSTANTS } from "../../../../firebase/configs";

const ProfileDetails = () => {
  const classes = useStyles();
  const { control } = useFormContext();

  return (
    <Box component={"div"} className={classes.flexColumn} gap={"30px"}>
      <Typography variant="mediumRegular" color={"#0F1405"} component={"h6"}>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={3} md={6} sm={12}>
          <Controller
            name="fullName"
            control={control}
            rules={{
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
              return <TextField variant="outlined" InputLabelProps={{ className: classes.inputLabel }} label={"Full name"} fullWidth {...field} helperText={error?.message} error={error?.message} />;
            }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              validate: (value) => {
                return matchIsValidTel(value) || "Please enter a valid phone number";
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return <MuiTelInput defaultCountry={"IN"} InputLabelProps={{ className: classes.inputLabel }} label={"Phone number"} {...field} style={{ width: "100%" }} helperText={error?.message} error={error?.message} />;
            }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => {
              return (
                <FormControl fullWidth>
                  <InputLabel className={classes.inputLabel}>Gender</InputLabel>
                  <Select label={"Gender"} fullWidth {...field}>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Not to disclose"}>Not to disclose</MenuItem>
                  </Select>
                </FormControl>
              );
            }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: {
                value: CONSTANTS.EMAIL_VALIDATION,
                message: "Please enter a valid email",
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return <TextField variant="outlined" label={"Email"} InputLabelProps={{ className: classes.inputLabel }} value={field.value} {...field} fullWidth helperText={error?.message} error={error?.message} />;
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDetails;
