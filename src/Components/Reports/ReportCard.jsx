import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {StyledLink} from "../Base/StyledLink.jsx";

import { parseJSON, differenceInSeconds} from 'date-fns'
import React from 'react'

export const ReportCard = ({Report}) => {

  const calculateTimeLeft = (JSONTime) => {
    console.log(JSONTime);
    const diff = differenceInSeconds(parseJSON(JSONTime), new Date());
    const days = Math.floor(diff / 86400);
    const hours = Math.floor((diff - days * 86400) / 3600);
    const minutes = Math.floor((diff - days * 86400 - hours * 3600) / 60);
  
    return `${days} Days, ${hours} Hours, and ${minutes} Minutes`;
  }

  return (
    <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography>
          {Report.elevatorName}
        </Typography>
        <Typography>
          Address: {Report.address}
        </Typography>
        <Typography component="">
          Deadline: {Report.deadline.split("T")[0]}
        </Typography>
        <Typography>
          Time Left: {calculateTimeLeft(Report.deadline)}
        </Typography>
        <Typography>
          Assigned Technician: { Report.assignedTechnician != null ? Report.technicianName : "None Assigned"}
        </Typography>
        <Typography>
          Tasks Done: {Report.tasksDone}/{Report.totalTasks}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledLink to={Report.id}>Show Report</StyledLink>
      </CardActions>
    </Card>
  )
}
