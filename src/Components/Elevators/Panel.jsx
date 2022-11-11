import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import "../../Style/ElevatorIndexPanel.css";
import {ReportDetails} from "../Reports/ReportDetails";
import {StyledLink} from "../StyledLink.jsx";
import React from "react";
import "../../Style/ElevatorIndexPanel.css";
import { Link } from "react-router-dom";
import ActionPanel from "./ActionPanel";
import { useEffect } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReportDetails } from '../Reports/ReportDetails';

export const Panel = ({Elevator, DaysLeft}) => {
    const setBackground = (timeLeft) => {
      if(Elevator.ErrorStatus === "Ok")
        return {};
      if(timeLeft > 7)
        return {};
      else if(timeLeft > 3)
        return {
          backgroundColor: 'yellow'
        };
      else
        return {
          backgroundColor: 'red'
        };
    }
    return (
      <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography>
          <StyledLink color='primary' to={"Building/"+Elevator.buildingId}>{Elevator.buildingName}</StyledLink>
        </Typography>
        <Typography variant="h5" component="">
          {Elevator.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Status: {Elevator.errorReport ? <ReportDetails ErrorReport={Elevator.errorReport}/> : "Ok"}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledLink to={"Elevator/"+Elevator.id}>Show Elevator</StyledLink>
      </CardActions>
    </Card>
    )
}
/*
<div className='ElevatorIndexPanelContainer' style={setBackground(DaysLeft)}>
        <Link to={"Building/"+Elevator.buildingId}>{Elevator.buildingName}</Link>
        <p>{Elevator.Name}</p>
        <span>Status: </span>
        {Elevator.ErrorStatus !== "Ok" ? <Link to={"Report/"+Elevator.ErrorReportId}>{Elevator.ErrorStatus}</Link> : <span>{Elevator.ErrorStatus}</span>}
        <p>DeadLine: {Elevator.DeadLine}</p>
        <p>DaysLeft: {DaysLeft}</p>
        <Link to={"Elevator/"+Elevator.id}>Show Elevator</Link>
      </div>
*/
