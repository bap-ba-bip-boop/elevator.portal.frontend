import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {StyledLink} from "../StyledLink.jsx";

import React from 'react'

export const ReportCard = ({Report}) => {
  return (
    <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography>
          
        </Typography>
        <Typography variant="h6" component="">
          Deadline: {Report.deadline.split('T')[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledLink to={Report.id}>Show Report</StyledLink>
      </CardActions>
    </Card>
  )
}
