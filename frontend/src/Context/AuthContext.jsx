import { children, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState({});
  useEffect(() => {
    let  token  = JSON.parse(localStorage.getItem("token"));
    setToken(token);
  }, []);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
