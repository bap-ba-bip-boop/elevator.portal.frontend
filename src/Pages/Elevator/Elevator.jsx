import {Divider, Grid, ListItem, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import {useParams} from "react-router-dom";
import ActionPanel from "../../Components/Elevators/Action/ActionPanel.jsx";
import {HistoryLogPanel} from "../../Components/Elevators/HistoryLog/HistoryLogPanel";
import MetaPanel from "../../Components/Elevators/Meta/MetaPanel.jsx";
import {ElevatorProvider, useElevatorContext} from "../../Context/ElevatorContext.jsx";
import {GetElevatorById} from "../../Services/elevatorFunctionService";

export const Elevator = () => {
    const {ElevatorId} = useParams();
    const {isLoading, error, data: elevator} = useQuery({
        queryKey: ["elevators", ElevatorId],
        queryFn: () => GetElevatorById(ElevatorId)
    });

    if (isLoading) {
        return <Box><Typography>Loading...</Typography></Box>;
    }
    if (error) {
        return <Box><Typography>Could not find elevator</Typography></Box>;
    }

    return (
        <ElevatorProvider Elevator={elevator}>
            <ElevatorDetails/>
        </ElevatorProvider>
    );
};

const ElevatorDetails = ({Elevator}) => {
    const {Name, Building, Company, Type, isFunctioning} = useElevatorContext();
    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                flexGrow={1}>
                <Grid container display={"flex"} justifyContent={"space-evenly"} flexGrow={1}>
                    <Grid item minWidth={"20em"}>
                        <Typography variant={"h5"} marginBottom={1}>{"Details"}</Typography>
                        <List sx={{border: "1px solid lightgray"}}>
                            <ListItem key={name}>
                                <ListItemText primary={"Name:"} secondary={Name}/>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary={"Building:"} secondary={Building}/>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary={"Company:"} secondary={Company}/>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText>{isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary={"Elevator-type:"} secondary={Type}/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item>
                        <MetaPanel/>
                    </Grid>
                </Grid>
                <Box flex={1} justifyContent={"center"}>
                    <ActionPanel/>
                    <HistoryLogPanel/>
                </Box>
            </Box>
        </>
    )
        ;
};