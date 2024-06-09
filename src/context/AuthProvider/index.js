import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { CONSTANTS, auth, collections } from "../../firebase/configs";
import { AES } from "crypto-js";
import { getData } from "../../utils/services";

export const AuthContext = createContext();

const initalState = {
  userData: null,
  loginModal: true,
  cartData: [],
  cartTrigger: 0,
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
      if (data?.payload?.userData) {
        const encryptedData = AES.encrypt(JSON.stringify(data.payload.userData), CONSTANTS.DATA_ENCRYPTION_KEY).toString();
        localStorage.setItem("_user", encryptedData);
      }
      return { ...state, ...data?.payload };
    case "CART_TRIGGER":
      return { ...state, cartTrigger: state.cartTrigger + 1 };
    case "SIGN_OUT":
      localStorage.clear();
      return initalState;
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [authData, dispatchAuthData] = useReducer(handleAuthContext, initalState);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    auth.onAuthStateChanged((res) => {
      if (res?.uid) {
        dispatchAuthData({ action: "UPDATE", payload: { userData: res, loginModal: false } });
      } else {
        dispatchAuthData({ action: "SIGN_OUT" });
      }
      setLoader(false);
    });
  }, []);

  useEffect(() => {
    if (!authData.userData?.uid) {
      return;
    }

    const getCartData = async () => {
      const orders = await getData(collections.ORDERS, authData.userData.uid);
      dispatchAuthData({ action: "UPDATE", payload: { cartData: orders } });
    };

    getCartData();
  }, [authData.userData?.uid, authData.cartTrigger]);

  return <AuthContext.Provider value={{ authData, dispatchAuthData }}>{!loader ? children : null}</AuthContext.Provider>;
};

export default AuthProvider;
