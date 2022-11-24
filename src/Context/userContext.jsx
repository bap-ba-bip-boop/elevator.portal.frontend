import React, { createContext, useState, useContext, useEffect } from 'react'

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const loginUser = (newId, newName) =>{
        console.log("login called with parameters: ", newId, newName);
        setUser(
            {
                userName: newName,
                userId: newId
            }
        );
    }

    const logoutUser = () => {
        console.log("logout called");
        setUser(
            null
        );
    }

    return(
        <UserContext.Provider value={
            {
                user,
                loginUser,
                logoutUser
            }
            }>
            {children}
        </UserContext.Provider>
    );
}