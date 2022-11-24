import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"

import { Navigate } from "react-router-dom";
import { useUserContext } from "../../Context/userContext";

import React from 'react'

export const EmployeeLoginCard = ({Employee}) => {

  const {loginUser, user} = useUserContext();
  const {companyName, employeeName, id} = Employee;
  
  if(user !== null)
    return (
    <Navigate to={"/"} />
  );

  return(
    <>
      <Card sx={{ minWidth: 275}}>
        <CardContent>
          <Typography>
            {employeeName}
          </Typography>
          <Typography>
            Employee of {companyName}
          </Typography>
          <Typography>
            Id: {id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={
            () => loginUser(id, employeeName)
          }>Login</Button>
        </CardActions>
      </Card>
    </>
  );
}
