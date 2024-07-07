import React, { useState } from "react";
import { useStyles } from "../../styles";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { getFileURL, updateData } from "../../../../utils/services";
import { useAuthContext } from "../../../../context/AuthProvider";
import { ORDER_STATUS, collections } from "../../../../firebase/configs";
import { useSnackbarContext } from "../../../../context/SnackbarProvider";

const ExchangeModal = (props) => {
  const { handleExchangeModal, data } = props;
  const classes = useStyles();
  const {
    authData: { userData },
    dispatchAuthData,
  } = useAuthContext();
  const { dispatchSnackbarData } = useSnackbarContext();
  const [formData, setFormData] = useState({});

  const handleExchange = async () => {
    try {
      let payload = { ...formData };
      if (formData?.proof) {
        payload["proof"] = await getFileURL(formData?.proof, userData?.uid);
      }
      const newPayload = {
        ...data,
        status: ORDER_STATUS.EXCHANGE,
        exchange: { ...payload },
      };
      delete newPayload["productDetails"];
      await updateData(
        collections.ORDERS,
        newPayload,
        newPayload?.info?.id,
        userData?.uid
      );
      dispatchAuthData({ action: "CART_TRIGGER" });
      dispatchSnackbarData({
        action: "UPDATE",
        payload: {
          open: true,
          severity: "success",
          message: "Exchange request has been placed!",
        },
      });
      handleExchangeModal();
    } catch (err) {
      console.error(err);
      dispatchSnackbarData({
        action: "UPDATE",
        payload: {
          message: "Something went wrong!",
          severity: "error",
          open: true,
        },
      });
    }
  };

  return (
    <>
      <Box component={"div"} className={classes.flexColumn} gap={"32px"}>
        <Box component={"div"} className={classes.flexColumn} gap={"12px"}>
          <Typography
            variant="largeExtraBold"
            component={"h6"}
            color={"#0F1405"}
          >
            Reason for exchange
          </Typography>
          <Typography variant="smallThin" component={"h6"} color={"#676C5A"}>
            Please let us know why you would like to exchange!
          </Typography>
        </Box>
        <Box component={"div"} className={classes.flexColumn} gap={"32px"}>
          <Box component={"div"} className={classes.flexColumn} gap={"18px"}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel className={classes.inputLabel}>
                Reason for exchange
              </InputLabel>
              <Select
                name="reason"
                label="Reason for exchange"
                className={classes.selectStyles}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                value={formData["reason"]}
              >
                <MenuItem value={"Damaged"}>Damaged</MenuItem>
                <MenuItem value={"Color Problem"}>Color Problem</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              name="comment"
              fullWidth
              multiline
              rows={4}
              label="Comments"
              className={classes.inputStyles}
              InputLabelProps={{
                className: classes.inputLabel,
              }}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData["comment"]}
            />
            <>
              <input
                type="file"
                id="upload-file"
                accept="image/*"
                name="proof"
                multiple={false}
                style={{ display: "none" }}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.files[0],
                  });
                }}
              />
              <Box
                className={classes.uploadContainer}
                component={"label"}
                htmlFor="upload-file"
              >
                {formData["proof"] ? (
                  <Typography
                    variant="smallRegular"
                    component={"h6"}
                    color={"#0F1405"}
                  >
                    {formData["proof"]?.name}
                  </Typography>
                ) : (
                  <>
                    <FileUploadOutlinedIcon color="#0F1405" />
                    <Typography
                      variant="smallRegular"
                      component={"h6"}
                      color={"#0F1405"}
                    >
                      Upload Image
                    </Typography>
                  </>
                )}
              </Box>
            </>
          </Box>
          <Box
            className={classes.flexCenter}
            justifyContent={"end"}
            gap={"12px"}
          >
            <Button
              type="button"
              variant="contained"
              color="info"
              onClick={() => {
                handleExchangeModal();
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={async () => {
                await handleExchange();
              }}
              disabled={Object.keys(formData).length < 3}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ExchangeModal;
