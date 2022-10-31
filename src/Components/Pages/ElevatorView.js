import React, { useEffect, useState } from 'react'
import { getData } from '../Data/JSONData'

import elevatorViewData from './ElevatorSettingsData.json'

export const ElevatorView = (props) => {

    const [elevator, setElevator] = useState(null);
    const [deviceMethodResponse, setDeviceMethodResponse] = useState(null)

    useEffect(()=>{
        getData(
            `${elevatorViewData.apiElevatorViewUrl}/${props.ElevatorId}`,//kommer säkerligen behövas skrivas om
            elevatorViewData.apiElevatorViewMethod,
            elevatorViewData.apiElevatorViewHeaders
        ).then(
            result => {
                setElevator(result);
            }
        );
    },[])

    const sendDeviceMethodCall = (event) =>
    {
        event.preventDefault();
        var messageBody = elevatorViewData.DeviceMethodCallBody;

        messageBody.ElevatorId = elevator.elevatorId;
        messageBody.FunctionName = "methodName";

        fetch(
            elevatorViewData.apiDeviceMethodCallUrl,
            {
                method: elevatorViewData.apiDeviceMethodCallMethod,
                headers: elevatorViewData.apiDeviceMethodHeaders,
                body: JSON.stringify(messageBody)
            }
        )
        .then(r => r.json())
        .then(
            result => {
                var response = elevatorViewData.DeviceMethodCallResponse;
                response.Message = result.message;
                response.Success = result.success;
                console.log(response);
                setDeviceMethodResponse(response);
            }
        ).catch(err => {
            console.log("Error Posting data: " + err);
          });
    }

    return (
        <>
            <h2>{elevator && elevator.elevatorName}</h2>
            <h3>{elevator && elevator.buildingName}</h3>
            <p>{elevator && elevator.isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</p>
            <p>{elevator && elevator.status}</p>
            <p>{elevator && elevator.areDoorsOpen === true ? "Doors are open" : "Doors are not open"}</p>

            <div>
                <h2>Button Panel:</h2>
                <input type="submit"  onClick={e => sendDeviceMethodCall(e)} value="Open Doors"/>
                {deviceMethodResponse && (deviceMethodResponse.Success === true ? <p>{deviceMethodResponse.Message}</p> : <p>{deviceMethodResponse.Message}</p>)}
            </div>
        </>
    )
}
