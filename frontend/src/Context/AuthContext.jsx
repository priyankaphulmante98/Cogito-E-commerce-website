import { children } from "react";
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export const  AuthContextProvider = ({children}) => {
    const [token, setToken] = useState({})
    return <AuthContext.Provider value={{token, setToken}}>
        {children}
    </AuthContext.Provider>
}
