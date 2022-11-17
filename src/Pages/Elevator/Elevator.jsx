import {Grid, ListItem, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import ActionPanel from "../../Components/Elevators/Action/ActionPanel.jsx";
import MetaPanel from "../../Components/Elevators/Meta/MetaPanel.jsx";
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
    return <ElevatorDetails Elevator={elevator}/>;
};


const ElevatorDetails = ({Elevator}) => {
    const {name, buildingName, companyName, isFunctioning, elevatorType} = Elevator;
    const [selectedValues, setSelectedValues] = useState([]);

    const selectedValuesChange = (values) => {
        setSelectedValues(values);
    };

    const updateValue = () => {

    };

    return (
        <Grid container alignItems={"center"} direction={"column"}>
            <List>
                <ListItem key={name}>
                    <ListItemText primary={"Name:"} secondary={name}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Building:"} secondary={buildingName}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Company:"} secondary={companyName}/>
                </ListItem>
                <ListItem>
                    <ListItemText>{isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Elevator-type:"} secondary={elevatorType}/>
                </ListItem>
            </List>
            <MetaPanel Elevator={Elevator} onChange={selectedValuesChange}/>
            <ActionPanel Elevator={Elevator} selectedValues={selectedValues}/>
        </Grid>
    );
};