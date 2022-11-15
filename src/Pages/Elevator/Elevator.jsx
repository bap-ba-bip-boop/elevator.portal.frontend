import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ActionPanel from "../../Components/Elevators/ActionPanel";
import MetaPanel from "../../Components/Elevators/Meta/MetaPanel.jsx";
import {GetElevatorById} from "../../Services/elevatorFunctionService";
import {useQuery} from '@tanstack/react-query';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HistoryLogPanel } from "../../Components/Elevators/HistoryLogPanel";

export const Elevator = () => {
    const {ElevatorId} = useParams();
    const {isLoading, error, data:elevator } = useQuery({ queryKey: ['elevators', ElevatorId], queryFn: () => GetElevatorById(ElevatorId)});

    if(isLoading)
        return <Box><Typography>Loading...</Typography></Box>
    if(error)
        return <Box><Typography>Could not find elevator</Typography></Box>
    return <ElevatorDetails Elevator={elevator}/>;
}

const ElevatorDetails = ({Elevator}) =>
{
    const {name, buildingName, companyName, isFunctioning, elevatorType } = Elevator;
    return (
        <>
            <h2>{name}</h2>
            <h3>Building: {buildingName}</h3>
            <h3>Company: {companyName}</h3>
            <p>{isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</p>
            <p>Elevatortype: {elevatorType}</p>
            <MetaPanel Elevator={Elevator}/>
            <ActionPanel Elevator={Elevator}/>
            <HistoryLogPanel Elevator={Elevator}/>
        </>
    )
}