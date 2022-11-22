import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"

import React from 'react'

export const EmployeeLoginCard = ({Employee}) => {

    const {companyName, employeeName, id} = Employee;

  return (
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
        <Button>Login</Button>
      </CardActions>
    </Card>
  )
}
