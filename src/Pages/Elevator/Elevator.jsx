import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ActionPanel from "../../Components/Elevators/ActionPanel";
import MetaPanel from "../../Components/Elevators/Meta/MetaPanel.jsx";
import {GetElevatorById} from "../../Services/elevatorFunctionService";

export const Elevator = () => {

    const [elevator, setElevator] = useState(() => null);
    const [elevatorMeta, setElevatorMeta] = useState([]);

    const [deviceMethodResponse, setDeviceMethodResponse] = useState(() => null)
    const {ElevatorId} = useParams();

    useEffect( () => {
        GetElevatorById(ElevatorId).then(setElevator);
    }, []);

    useEffect(() => {
        return () => {
            console.log(elevator);
        };
    }, [elevator]);

    useEffect(() => {
        return () => {
            console.table(elevatorMeta);
        };
    }, [elevatorMeta]);




    const ResetElevator = (event) =>
    {
        event.preventDefault();

        var confirmed = confirm("Are you sure you want to reset the Elevator");

        if (confirmed)
        {
            sendDeviceMethodCall("ResetElevator");
        }
        else
        {
            processResponse(false, "Reset Cancelled")
        }
    }

    return (
        <>
            <h2>{elevator && elevator.name}</h2>
            <h3>Building: {elevator && elevator.buildingName}</h3>
            <h3>Company: {elevator && elevator.companyName}</h3>
            <p>{elevator && elevator.isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</p>
            <p>Elevatortype: {elevator && elevator.elevatorType}</p>
            {elevator && <MetaPanel Elevator={elevator}/> }
            <ActionPanel ElevatorId={ElevatorId}/>
        </>
    )
}
