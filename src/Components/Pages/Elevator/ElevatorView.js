import React, { useEffect, useState } from 'react'
import { getData } from '../../Data/JSONData'

import { useElevator } from '../../../Context/ElevatorProvider.js';

import elevatorViewData from './ElevatorSettingsData.json'
import { usePageUpdate } from '../../../Context/PageProvider';

export const ElevatorView = () => {

    const [elevator, setElevator] = useState(() => null);
    const [deviceMethodResponse, setDeviceMethodResponse] = useState(() => null)

    const selectedElevatorId = useElevator();
    const setSelectedPage = usePageUpdate();

    useEffect( () => {
        getData(
            `${elevatorViewData.apiElevatorViewUrl}/${selectedElevatorId}`,//kommer säkerligen behövas skrivas om
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
            <button onClick={()=>setSelectedPage("ElevatorIndex")}>Back</button>
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
