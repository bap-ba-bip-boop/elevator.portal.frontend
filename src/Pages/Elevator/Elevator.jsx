import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ActionPanel from "../../Components/Elevators/Action/ActionPanel.jsx";
import MetaPanel from "../../Components/Elevators/Meta/MetaPanel.jsx";
import {GetElevatorById} from "../../Services/elevatorFunctionService";
import {useQuery} from 'react-query';
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StyledLink } from "../../Components/Base/StyledLink.jsx";


export const Elevator = () => {
    const {ElevatorId} = useParams();
    const {isLoading, error, data:elevator } = useQuery({ queryKey: ['elevators', ElevatorId], queryFn: () => GetElevatorById(ElevatorId)});
    console.log("elevator", elevator);
    if(isLoading)
        return <Box><Typography>Loading...</Typography></Box>
    if(error)
        return <Box><Typography>Could not find elevator</Typography></Box>
    return <ElevatorDetails Elevator={elevator}/>;
}

const ElevatorDetails = ({Elevator}) =>
{
    const {id, name, buildingName, companyName, isFunctioning, elevatorType } = Elevator;
    return (
        <>
            <Link to={`/Elevator/${id}/CreateReport`}>Create Error Report</Link>
            {/* <StyledLink to={"Elevator/"+Elevator.id+"/CreateReport"}>Create Error Report</StyledLink> */}

            <h2>{name}</h2>
            <h3>Building: {buildingName}</h3>
            <h3>Company: {companyName}</h3>
            <p>{isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</p>
            <p>Elevatortype: {elevatorType}</p>
            <MetaPanel Elevator={Elevator}/>
            <ActionPanel Elevator={Elevator}/>
        </>
    )
}