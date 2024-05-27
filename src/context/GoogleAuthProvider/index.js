import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/configs';

export const UserContext = createContext();

export const UseUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

const GoogleAuthProvider = ({ children }) => {
  const [userState, setUserState] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((res) => {
      setUserState(res);
    });
  }, []);

  return <UserContext.Provider value={userState}>{children}</UserContext.Provider>;
};

export default GoogleAuthProvider;
