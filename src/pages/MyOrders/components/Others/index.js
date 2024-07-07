import React from "react";
import { tabStateLabel } from "../..";
import { Typography } from "@mui/material";
import { ORDER_STATUS } from "../../../../firebase/configs";

const GetStatus = (props) => {
  const { mode, data } = props;
  console.log(data, "54t45y");
  switch (mode) {
    case tabStateLabel[0]:
      return (
        <Typography
          variant="mediumExtraBold"
          color={"#A67829"}
          component={"h6"}
        >
          In-Transit
        </Typography>
      );
    case tabStateLabel[1]:
      return data?.status === ORDER_STATUS.EXCHANGE ? (
        <Typography
          variant="mediumExtraBold"
          color={"#6F813C"}
          component={"h6"}
        >
          Exchange
        </Typography>
      ) : (
        <Typography
          variant="mediumExtraBold"
          color={"#6F813C"}
          component={"h6"}
        >
          Delivered
        </Typography>
      );

    case tabStateLabel[2]:
      return (
        <Typography
          variant="mediumExtraBold"
          color={"#C02B2B"}
          component={"h6"}
        >
          Cancelled
        </Typography>
      );
    default:
      break;
  }
};

export default GetStatus;
