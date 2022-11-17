import ElevatorIcon from "@mui/icons-material/Elevator";
import {Avatar, CardHeader, ListItem, ListItemText} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import React from "react";
import "../../Style/ElevatorIndexPanel.css";
import {StyledLink} from "../Base/StyledLink.jsx";
import {ReportDetails} from "../Reports/ReportDetails";

export const ElevatorCard = ({Elevator}) => {
    const {buildingId, buildingName, name, errorReport, id} = Elevator;
    return (
        <Card sx={{minWidth: "20em"}}>
            <CardHeader avatar={
                <Avatar sx={{bgcolor: "lightblue"}} aria-label="elevator">
                    <ElevatorIcon/>
                </Avatar>
            } title={name}
            />
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemText primary={"Building: "} secondary={
                            <StyledLink color="primary"
                                        to={`Building/${buildingId}`}>{buildingName}</StyledLink>}>
                        </ListItemText>
                        <ListItemText primary={"Status:"} secondary={errorReport ?
                            <ReportDetails ErrorReport={errorReport}/> : "Ok"}/>
                    </ListItem>
                </List>
            </CardContent>
            <CardActions>
                <StyledLink variant={"button"} to={`Elevator/${id}`}>Show Elevator</StyledLink>
            </CardActions>
        </Card>
    );
};
