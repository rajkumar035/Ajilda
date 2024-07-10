import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getCustomerUsers } from "../../../utils/services";

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  const nameParts = name.trim().split(" ");
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: nameParts.length > 1 
      ? `${nameParts[0][0]}${nameParts[1][0]}`
      : `${nameParts[0][0]}`,
  };
}
export default function Users() {
  const [search, setSearch] = useState("");
  const [userdata, setUserdata] = useState([]);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const filteredUsers = userdata.filter(
    (user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.phoneNumber.includes(search) ||
      user.uid.includes(search)
  );
  useEffect(() => {
    getCustomerUsers().then((res) => {
      setUserdata(res);
    });
  }, []);
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={9}>
          <Typography variant="h4" gutterBottom>
            User's List
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Search"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {filteredUsers.map((user, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar {...stringAvatar(user.fullName)} aria-label="recipe" />}
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                title={user.fullName}
                subheader={`${user.gender} - ${user.phoneNumber}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
