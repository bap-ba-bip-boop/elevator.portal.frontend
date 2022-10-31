import React, { useEffect, useState } from 'react'
import { getData } from '../Data/JSONData'

import elevatorViewData from './ElevatorSettingsData.json'

export const ElevatorView = (props) => {

    //address, "GET", 
    /*
    Header:
        "Headers" : {
            "Content-Type": "application/json"
        }
    */

    const [elevator, setElevator] = useState(elevatorViewData['ElevatorView-ViewModel']);

    useEffect(()=>{
        //var elevatordata = getData(
        //    elevatorViewData.apiElevatorViewUrl,//kommer säkerligen behövas skrivas om
        //    elevatorViewData.apiElevatorViewMethod,
        //    elevatorViewData.apiElevatorViewHeaders
        //);
        var elevatordata = {
            "ElevatorId" : "Elevator1",
            "ElevatorName" : "Elevator1",
            "BuildingName" : "Building1",
            "isFunctioning": true,
            "Status": "Going from some floor to another",
            "AreDoorsOpen": false
        };

        //för test
        console.log(elevatordata);

        setElevator(elevatordata)

    },[])

    const sendDeviceMethodCall = (methodName) =>
    {
        var messageBody = elevatorViewData.DeviceMethodCallBody;

        messageBody.ElevatorId = elevator.ElevatorId;
        messageBody.FunctionName = methodName;

        console.log("event sent with method body: ", messageBody)
    }

    return (
        <>
            <h2>{elevator.ElevatorName}</h2>
            <h3>{elevator.BuildingName}</h3>
            <p>{ elevator.isFunctioning === true ? "Elevator is Functioning" : "Elevator does not Function"}</p>
            <p>{elevator.Status}</p>
            <p>{ elevator.AreDoorsOpen === true ? "Doors are open" : "Doors are not open"}</p>

            <div>
                <h2>Button Panel:</h2>
                <button onClick={() => sendDeviceMethodCall("OpenClose")}>Open Doors</button>
            </div>
        </>
    )
}
