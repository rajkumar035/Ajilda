import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../../firebase/configs";

export const AuthContext = createContext();

const initalState = {
  userData: null,
  loginModal: true,
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

const handleAuthContext = (state, data) => {
  switch (data.action) {
    case "LOGIN_MODAL":
      return { ...state, loginModal: !state.loginModal };
    case "UPDATE":
      localStorage.setItem("_user", JSON.stringify(data?.payload?.userData));
      return { ...state, ...data?.payload };
    case "SIGN_OUT":
      localStorage.clear();
      return initalState;
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [authData, dispatchAuthData] = useReducer(handleAuthContext, initalState);

  useEffect(() => {
    auth.onAuthStateChanged((res) => {
      if (res?.uid) {
        dispatchAuthData({ action: "UPDATE", payload: { userData: res, loginModal: false } });
      }
    });
  }, []);

  return <AuthContext.Provider value={{ authData, dispatchAuthData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
