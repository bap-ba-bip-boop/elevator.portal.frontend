import React, { useEffect, useState } from 'react'
import { getData } from '../../Data/JSONData'
import { Link } from "react-router-dom";

export const Elevator = ({ElevatorId}) => {

    const [elevator, setElevator] = useState(() => null);
    const [deviceMethodResponse, setDeviceMethodResponse] = useState(() => null)

    const apiElevatorGETUrl = "";
    const apiElevatorPOSTUrl = "https://localhost:7174/api/Elevator";

    useEffect( () => {
        getData(
            `${apiElevatorGETUrl}/${ElevatorId}`,//kommer säkerligen behövas skrivas om
            "GET",
            {
                "Content-Type": "application/json"
            }
        )
        .then(
            result => {
                setElevator(result);
            }
        );
    },
    []
    );

    const OpenCloseDoors = (event) =>
    {
        event.preventDefault();

        sendDeviceMethodCall("OpenCloseDoor");
    }

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

    const processResponse = (Success, Message) =>
    {
        var response = {};
        response.Message = Message;
        response.Success = Success;
        console.log(response);
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
            <Link to='/'>Back</Link>
            <h2>{elevator && elevator.name}</h2>
            <h3>Building: {elevator && elevator.buildingName}</h3>
            <h3>Company: {elevator && elevator.companyName}</h3>
            <p>{elevator && elevator.isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</p>
            <p>Elevatortype: {elevator && elevator.elevatorType}</p>

            <div>
                <h2>Button Panel:</h2>
                <input type="submit"  onClick={e => OpenCloseDoors(e)} value="Open Doors"/>
                <input type="submit"  onClick={e => ResetElevator(e)} value="Reset Elevators"/>
                {deviceMethodResponse && (deviceMethodResponse.Success === true ? <p>{deviceMethodResponse.Message}</p> : <p>{deviceMethodResponse.Message}</p>)}
            </div>
        </>
    )
}
