import React, { useEffect, useState } from 'react'
import { getData } from '../../Data/JSONData'

import elevatorViewData from './ElevatorSettingsData.json'

export const ElevatorView = (props) => {

    const [elevator, setElevator] = useState(null);
    const [deviceMethodResponse, setDeviceMethodResponse] = useState(null)

    useEffect( () => {
        getData(
            `${elevatorViewData.apiElevatorViewUrl}/${props.ElevatorId}`,//kommer säkerligen behövas skrivas om
            elevatorViewData.apiElevatorViewMethod,
            elevatorViewData.apiElevatorViewHeaders
        )
        .then(
            result => {
                setElevator(result);
            }
        );
    },
    []
    );

    const OpenCloseDoors = event =>
    {
        event.preventDefault();

        sendDeviceMethodCall("OpenCloseDoor");

        if(deviceMethodResponse.Success)
        {
            //update page?
        }
    }

    const processResponse = (Success, Message) =>
    {
        var response = elevatorViewData.DeviceMethodCallResponse;
        response.Message = Message;
        response.Success = Success;
        console.log(response);
        setDeviceMethodResponse(response);
    }

    const sendDeviceMethodCall = (methodName) =>
    {
        var messageBody = elevatorViewData.DeviceMethodCallBody;

        messageBody.ElevatorId = elevator.deviceId;
        messageBody.FunctionName = methodName;

        fetch(
            elevatorViewData.apiDeviceMethodCallUrl,
            {
                method: elevatorViewData.apiDeviceMethodCallMethod,
                headers: elevatorViewData.apiDeviceMethodHeaders,
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
            <button onClick={()=>props.SelectPageFunction("ElevatorIndex")}>Back</button>
            <h2>{elevator && elevator.name}</h2>
            <h3>Building: {elevator && elevator.buildingName}</h3>
            <h3>Company: {elevator && elevator.companyName}</h3>
            <p>{elevator && elevator.isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</p>
            <p>Elevatortype: {elevator && elevator.elevatorType}</p>

            <div>
                <h2>Button Panel:</h2>
                <input type="submit"  onClick={e => OpenCloseDoors(e)} value="Open Doors"/>
                {deviceMethodResponse && (deviceMethodResponse.Success === true ? <p>{deviceMethodResponse.Message}</p> : <p>{deviceMethodResponse.Message}</p>)}
            </div>
        </>
    )
}
