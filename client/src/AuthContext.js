import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);

}

export const AuthProvider = ({children}) =>{
    const [jwtToken,setJWTToken] = useState(null);
    const [userData, setUserData] = useState(null)

    const login = (token,user) =>{
        setJWTToken(token);
        setUserData(user);
    }

    return(
        <AuthContext.Provider value={{jwtToken, userData, login}}>
         {children}
        </AuthContext.Provider>
    )
}