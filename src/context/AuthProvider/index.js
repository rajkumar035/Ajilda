import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { CONSTANTS, ORDER_STATUS, auth, collections } from "../../firebase/configs";
import { AES } from "crypto-js";
import { getData } from "../../utils/services";

export const AuthContext = createContext();

const initalState = {
  userData: null,
  loginModal: true,
  cartData: [],
  orderData: [],
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
    auth.onAuthStateChanged(async (res) => {
      if (res?.uid) {
        const customAuthLogin = { ...res };
        // Customizing the same UID for 2 different login's
        const userData = await getData(collections.USERLIST);
        const getPhoneMatch = userData.find((items) => {
          return items.phoneNumber?.replace(/\s+/g, "") === res.phoneNumber?.replace(/\s+/g, "");
        });
        const getEmailMatch = userData.find((items) => {
          return items?.email === res?.email;
        });
        const role = getPhoneMatch ? getPhoneMatch.role : getEmailMatch ? getEmailMatch.role : null;
        const uid = getPhoneMatch ? getPhoneMatch.uid : getEmailMatch ? getEmailMatch.uid : customAuthLogin.uid;
        customAuthLogin["uid"] = uid;
        customAuthLogin["role"] = role;
        dispatchAuthData({ action: "UPDATE", payload: { userData: customAuthLogin, loginModal: false } });
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

    setLoader(true);
    const getCartData = async () => {
      const orders = await getData(collections.ORDERS, authData.userData.uid);
      dispatchAuthData({
        action: "UPDATE",
        payload: {
          orderData: orders,
          cartData: orders.filter((items) => {
            return items.status === ORDER_STATUS.ADDED;
          }),
        },
      });
    };
    setLoader(false);

    getCartData();
  }, [authData.userData?.uid, authData.cartTrigger]);

  return <AuthContext.Provider value={{ authData, dispatchAuthData }}>{!loader ? children : null}</AuthContext.Provider>;
};

export default AuthProvider;
