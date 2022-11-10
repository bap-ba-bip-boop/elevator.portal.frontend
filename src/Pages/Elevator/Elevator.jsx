import React, { useEffect, useState } from 'react'
import { getData } from '../../Data/JSONData'
import { Link, useParams } from "react-router-dom";
import { OpenCloseDoors, GetElevatorById } from '../../Services/elevatorFunctionService';
import ActionPanel from '../../Components/Elevators/ActionPanel';

export const Elevator = () => {

    const [elevator, setElevator] = useState(() => null);
    const [deviceMethodResponse, setDeviceMethodResponse] = useState(() => null)

    const apiElevatorPOSTUrl = "https://localhost:7174/api/Elevator";

    const {ElevatorId} = useParams();

    useEffect( () =>
    {
        const contain = async () =>
            await GetElevatorById(ElevatorId)
            .then(result => setElevator(result));
        contain();
    },
    []
    );

    const ProcessOpenClose = () =>
        OpenCloseDoors(elevator.id)
        .then(item => processResponse(item));

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

    const processResponse = ({success, value, message}) =>
    {
        var response = {};
        response.Message = message;
        response.Value = value;
        response.Success = success;
        setDeviceMethodResponse(response);
    }

    const sendDeviceMethodCall = (methodName) =>
    {
        var messageBody = {
            "Id" : "",
            "FunctionName": ""
        };

        messageBody.ElevatorId = elevator.deviceId;
        messageBody.FunctionName = methodName;

        fetch(
            apiElevatorPOSTUrl,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messageBody)
            }
        )
        .then(
            r => r.json()
            )
        .then(
            result => processResponse(result.success, result.message)
            )
        .catch(
            err => {
                console.log("Error Posting data: " + err);
            }
          );
    }

    return (
        <>
            <h2>{elevator && elevator.name}</h2>
            <h3>Building: {elevator && elevator.buildingName}</h3>
            <h3>Company: {elevator && elevator.companyName}</h3>
            <p>{elevator && elevator.isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</p>
            <p>Elevatortype: {elevator && elevator.elevatorType}</p>

            <ActionPanel />
            
        </>
    )
}
