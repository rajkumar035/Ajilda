import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAilu2pC59GpwyWULvSpgoTLKtroui0JxE",
  authDomain: "ajilda-cosmetics.firebaseapp.com",
  projectId: "ajilda-cosmetics",
  storageBucket: "ajilda-cosmetics.appspot.com",
  messagingSenderId: "216188587161",
  appId: "1:216188587161:web:58ff924820280e4d207c08",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const razorpay_key = "rzp_test_Iq80oNPkKZdSS5"
export const collections = {
  CART: "cart",
  ORDERS: "orders",
  PRODUCTS: "products",
  REVIEWS: "reviews",
  USERS: "users",
  USERLIST: "userlist",
  PROFILE: "profile",
};

export const CONSTANTS = {
  DATA_ENCRYPTION_KEY: "uih5t8754t776%R%$E$^7437ry347r",
  EMAIL_VALIDATION: /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/,
};
