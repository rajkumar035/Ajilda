import React from "react";
import { useStyles } from "../../styles";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const ExchangeModal = (props) => {
  const { handleExchangeModal } = props;
  const classes = useStyles();

  return (
    <Box component={"div"} className={classes.flexColumn} gap={"32px"}>
      <Box component={"div"} className={classes.flexColumn} gap={"12px"}>
        <Typography variant="largeExtraBold" component={"h6"} color={"#0F1405"}>
          Reason for exchange
        </Typography>
        <Typography variant="smallThin" component={"h6"} color={"#676C5A"}>
          Please let us know why you would like to exchange!
        </Typography>
      </Box>
      <Box component={"form"} className={classes.flexColumn} gap={"32px"}>
        <Box component={"div"} className={classes.flexColumn} gap={"18px"}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel className={classes.inputLabel}>Reason for exchange</InputLabel>
            <Select label="Reason for exchange" className={classes.selectStyles}>
              <MenuItem value={"Damaged"}>Damaged</MenuItem>
              <MenuItem value={"Color Problem"}>Color Problem</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            label="Comments"
            className={classes.inputStyles}
            InputLabelProps={{
              className: classes.inputLabel,
            }}
          />
          <>
            <input type="file" id="upload-file" accept="image/*" multiple={false} style={{ display: "none" }} />
            <Box htmlFor="upload-file" component={"label"} className={classes.uploadContainer}>
              <FileUploadOutlinedIcon color="#0F1405" />
              <Typography variant="smallRegular" component={"h6"} color={"#0F1405"}>
                Upload Image
              </Typography>
            </Box>
          </>
        </Box>
        <Box component={"form"} className={classes.flexCenter} justifyContent={"end"} gap={"12px"}>
          <Button
            type="reset"
            variant="contained"
            color="info"
            onClick={() => {
              handleExchangeModal();
            }}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ExchangeModal;
