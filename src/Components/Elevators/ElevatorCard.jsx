import ElevatorIcon from "@mui/icons-material/Elevator";
import {Avatar, CardHeader, ListItem, ListItemText} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import React from "react";
import "../../Style/ElevatorIndexPanel.css";
import {StyledLink} from "../Base/StyledLink.jsx";

export const ElevatorCard = ({Elevator}) => {
    const {currentBreakdown: breakdown, building, name, errorReport, id} = Elevator;
    const {id: buildingId, name: buildingName} = building;

    const BreakdownDetails = ({Breakdown}) => {
        const {id, errorReport} = Breakdown;
        const ErrorLink = ({url, text}) => {
            return <StyledLink variant={"button"} style={{color: "red"}} to={url}>{text}</StyledLink>;
        };
        return (
            <>
                {errorReport && <ErrorLink url={`/ErrorReports/${errorReport.id}`} text="See Ongoing Report"/>}
                {!errorReport && <ErrorLink url={`/ErrorReports/create/${id}`} text={"Create New Report"}/>}
            </>
        );
    };

    return (
        <Card
            variant={"outlined"}
            sx={{
                position: "relative",
                padding: 1,
                borderColor: (breakdown ? "red" : undefined),
                minWidth: "20em"
            }}>
            <CardHeader avatar={
                <Avatar sx={{bgcolor: "lightblue"}} aria-label="elevator">
                    <ElevatorIcon/>
                </Avatar>
            } title={name}
            />
            <CardContent>
                {breakdown && <Typography position={"absolute"} top={30} right={75} color={"red"}
                                          fontSize={"100px"}>!</Typography>}
                <List>
                    <ListItem>
                        <ListItemText primary={"Building: "} secondary={
                            <StyledLink color="primary"
                                        to={`Building/${buildingId}`}>{buildingName}</StyledLink>}>
                        </ListItemText>
                    </ListItem>
                </List>
            </CardContent>
            <CardActions>
                <StyledLink variant={"button"} to={`Elevator/${id}`}>Show Elevator</StyledLink>
                {breakdown && <BreakdownDetails Breakdown={breakdown}/>}
            </CardActions>
        </Card>
    );
};
