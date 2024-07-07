import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBILr0jqRhQaFZ2AeEi78hvfNW3GswNRbI",
  authDomain: "ajilda-cosmetics-35034.firebaseapp.com",
  projectId: "ajilda-cosmetics-35034",
  storageBucket: "ajilda-cosmetics-35034.appspot.com",
  messagingSenderId: "1044016942102",
  appId: "1:1044016942102:web:0e88dc86160387a02bb937",
  measurementId: "G-M0KMLGBR8W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const razorpay_key = "rzp_test_Iq80oNPkKZdSS5";
export const storageBucket = getStorage(app);

export const collections = {
  CART: "cart",
  ORDERS: "orders",
  PRODUCTS: "products",
  REVIEWS: "reviews",
  USERS: "users",
  USERLIST: "userlist",
  PROFILE: "profile",
};

export const ORDER_STATUS = {
  ADDED: "added",
  ORDERED: "ordered",
  DISPATCHED: "dispatched",
  CANCELLED: "cancelled",
  DELIVERED: "delivered",
  EXCHANGE: "exchange"
};

export const ROLES = {
  CUSTOMER: "CUSTOMER",
  DELIVERY: "DELIVERY",
  ADMIN: "ADMIN"
}

export const CONSTANTS = {
  DATA_ENCRYPTION_KEY: "uih5t8754t776%R%$E$^7437ry347r",
  EMAIL_VALIDATION: /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/,
};
