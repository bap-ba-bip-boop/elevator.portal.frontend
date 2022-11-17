import {Divider, Grid, ListItem, ListItemText, ListSubheader} from "@mui/material";
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
    const {id ,name, buildingName, companyName, isFunctioning, elevatorType} = Elevator;
    const [selectedValues, setSelectedValues] = useState([]);
    const [updateValue, setUpdateValue] = useState(() =>{});

    const selectedValuesChange = (values) => {
        setSelectedValues(values);
    };

    const pushUpdateFunction = (value) => {
        setUpdateValue(value);
    };


    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                flexGrow={1}>
                <Grid container display={"flex"} justifyContent={"space-evenly"} flexGrow={1}>
                    <Grid item minWidth={'20em'}>
                        <Typography variant={"h5"} marginBottom={1}>{"Details"}</Typography>
                        <List sx={{border:'1px solid lightgray'}}>
                            <ListItem key={name}>
                                <ListItemText primary={"Name:"} secondary={name}/>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary={"Building:"} secondary={buildingName}/>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary={"Company:"} secondary={companyName}/>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText>{isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary={"Elevator-type:"} secondary={elevatorType}/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item>
                        <MetaPanel Elevator={Elevator} onChange={selectedValuesChange} pushUpdate={pushUpdateFunction} />
                    </Grid>
                </Grid>
                <Box flex={1} justifyContent={"center"}>
                    <ActionPanel Elevator={Elevator} selectedValues={selectedValues} pushValue={updateValue} setPushFunction={pushUpdateFunction}/>
                </Box>
            </Box>
        </>
    )
        ;
};