import React, { createContext, useState, useContext } from 'react'
import { loginSecondLine } from '../Services/loginService';


const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const loginUser = (newId, newName) => {
        loginSecondLine(newId).then(result =>{
            var token = result.token;
            setUser(
                {
                    userName: newName,
                    userId: newId,
                    token: token
                }
            );
        });
    }

    const logoutUser = () => {
        console.log("logout called");
        setUser(
            null
        );
    }

    const getActiveToken = () => {
        return user.token ?? "";
    }

    return(
        <UserContext.Provider value={
            {
                user,
                loginUser,
                logoutUser,
                getActiveToken
            }
            }>
            {children}
        </UserContext.Provider>
    );
}