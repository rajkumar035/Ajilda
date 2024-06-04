import { Alert } from "@mui/material";
import React, { createContext, useContext, useReducer } from "react";

export const SnackbarContext = createContext();

const initalState = {
  open: false,
  severity: "",
  message: null,
};

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext);
  return context;
};

const handleSnackbarContext = (state, data) => {
  switch (data.action) {
    case "UPDATE":
      return { ...state, ...data.payload };
    case "CLOSE":
      return initalState;
    default:
      return state;
  }
};

const SnackbarProvider = ({ children }) => {
  const [snackBarData, dispatchSnackbarData] = useReducer(handleSnackbarContext, initalState);

  return (
    <SnackbarContext.Provider value={{ snackBarData, dispatchSnackbarData }}>
      {snackBarData.open && (
        <Alert
          variant="filled"
          severity={snackBarData.severity}
          className="custom-alert"
          onClose={() => {
            dispatchSnackbarData({
              action: "CLOSE",
            });
          }}
        >
          {snackBarData?.message}
        </Alert>
      )}
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
