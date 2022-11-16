import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import "../../Style/ElevatorIndexPanel.css";
import {ReportDetails} from "../Reports/ReportDetails";
import {StyledLink} from "../Base/StyledLink.jsx";

export const ElevatorCard = ({Elevator}) => {
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
