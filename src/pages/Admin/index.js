import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddProduct from "./Addproduct/Addproduct";
import Dashboard from "./Dashboard/Dashboard";
import Users from "./Users/User";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} padding={2}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="User's" {...a11yProps(1)} />
          <Tab label="Add product" {...a11yProps(2)} />
          <Tab label="View products" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Dashboard/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Users/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AddProduct />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        View products
      </CustomTabPanel>
    </Box>
  );
}

export default Admin;
