import React from 'react'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useUserContext } from "../../Context/userContext";

export const LogedInPanel = () => {
    const {user, logoutUser} = useUserContext();
    return (
      <>
        <Typography>
          Logged in as:
        </Typography>
        <Typography>
          {user.userName}
        </Typography>
        <Button onClick={() => logoutUser()}>Logout</Button>
      </>
    )
}
