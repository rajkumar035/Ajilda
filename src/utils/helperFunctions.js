import { Navigate } from "react-router-dom";
import routes from "./routes.json";
import { ROLES } from "../firebase/configs";
import { useAuthContext } from "../context/AuthProvider";

export const getTabText = (pathName) => {
  const splitName = pathName.split("/");
  const customName = splitName.length === 2 ? splitName[1] : splitName[2];
  let notfound;
  if (splitName.length === 3) {
    notfound = Object.keys(routes).find((items) => {
      return routes[items] === splitName[1];
    });
  } else {
    notfound = Object.keys(routes).find((items) => {
      return routes[items] === customName;
    });
  }
  const dynamicRoutCheck = notfound === "productDetails" || notfound === "orderDetails";
  if (customName === "") {
    return "Ajilda";
  } else if (typeof notfound === "undefined") {
    return "Not Found";
  } else {
    if (splitName.length === 2 && dynamicRoutCheck) {
      return "Not Found";
    }
    return customName[0].toUpperCase() + customName.substring(1);
  }
};

export const shrinkTextBased = (limit = 0, text = "") => {
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export const ProtectedRoute = ({ children, role = ROLES.CUSTOMER }) => {
  const {
    authData: { userData },
  } = useAuthContext();
  if (userData) {
    // Admin can access every routes
    if (userData.role === ROLES.ADMIN) {
      return children;
    }

    // Other only role based route form the prop
    if (role === userData.role) {
      return children;
    }

    return <Navigate to={routes.home} />;
  } else {
    <Navigate to={routes.home} />;
  }
};

export function removeNullKeys(obj) {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      removeNullKeys(obj[key]);
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }
  return obj;
}
