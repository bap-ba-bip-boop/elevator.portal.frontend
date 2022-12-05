import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StyledLink } from "../Base/StyledLink.jsx";

import { parseJSON, differenceInSeconds } from "date-fns";
import React from "react";

export const ReportCard = ({ Report }) => {
  const calculateTimeLeft = (JSONTime) => {
    const diff = differenceInSeconds(parseJSON(JSONTime), new Date());
    const days = Math.floor(diff / 86400);
    const hours = Math.floor((diff - days * 86400) / 3600);
    const minutes = Math.floor((diff - days * 86400 - hours * 3600) / 60);

    return `${days} Days, ${hours} Hours, and ${minutes} Minutes`;
  };

  function BgColorBasedOnDeadLineAndFinishDate(Report) {
    if (Report.isDone) return "green";
    if (Date.parse(Report.deadline) <= new Date()) return "red";
    if (Date.parse(Report.deadline) > new Date() && !Report.isDone) return "yellow";
    return "hotpink";
  }

  return (
    <Card sx={{ minWidth: 275, bgcolor: BgColorBasedOnDeadLineAndFinishDate(Report) }}>
      <CardContent>
        <Typography>{Report.elevatorName}</Typography>
        <Typography>Address: {Report.address}</Typography>
        {Report.deadline ? (
          <>
            {Report.finishTime ? (
              <Typography>Completed: {Report.finishTime}</Typography>
            ) : (
              <Typography>Completed: not yet completed</Typography>
            )}
            <Typography component="">Deadline: {Report.deadline.split("T")[0]}</Typography>
            <Typography>Time Left: {calculateTimeLeft(Report.deadline)}</Typography>
          </>
        ) : (
          <>
            {" "}
            {Report.finishTime ? (
              <Typography>Completed: {Report.finishTime}</Typography>
            ) : (
              <Typography>Completed: not yet completed</Typography>
            )}
            <Typography component="">Deadline: NULL</Typography>
          </>
        )}
        <Typography>
          Assigned Technician: {Report.assignedTechnician != null ? Report.technicianName : "None Assigned"}
        </Typography>
        <Typography>
          Tasks Done: {Report.tasksDone}/{Report.totalTasks}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledLink to={Report.id}>Show Report</StyledLink>
      </CardActions>
    </Card>
  );
};
