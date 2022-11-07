import React from 'react'
import { useElevatorUpdate } from '../../../Context/ElevatorProvider';
import { usePageUpdate } from '../../../Context/PageProvider';
import { useErrorReportUpdate } from '../../../Context/ErrorReportProvider';
import '../Style/ElevatorIndexPanel.css'

export const ElevatorIndexPanel = (props) => {

    const setSelectedPage = usePageUpdate();
    const setSelectedElevatorId = useElevatorUpdate();
    const setSelectedErrorId = useErrorReportUpdate();

    var redirectToErrorPage = (errorId) =>
    {
        console.log(`redirected to error page for error report with ID: ${errorId}`);
        setSelectedErrorId(errorId);
        setSelectedPage("ErrorReport");

        
    }
    var redirectToBuildingPage = (buildingId) =>
    {
      console.log(`redirected to building page for building with ID: ${buildingId}`);
      //props.SelectPageFunction("ErrorReport");
    }
    var redirectToElevator = (elevatorId) =>
    {
      console.log(`redirected to elevator page for elevator with ID: ${elevatorId}`);
      setSelectedElevatorId(elevatorId);
      setSelectedPage("ElevatorView");
    }
    var setBackground = (timeLeft) =>
    {
      if(props.ErrorStatus === "Ok")
        return {};
      if(timeLeft > 7)
        return {};
      else if(timeLeft > 3)
        return {
          backgroundColor: 'yellow'
        };
      else
        return {
          backgroundColor: 'red'
        };
    }
    return (
      <div className='ElevatorIndexPanelContainer' style={setBackground(props.DaysLeft)}>
        <button onClick={() => redirectToBuildingPage(props.BuildingId)}><h2>{props.BuildingName}</h2></button>

        <p>{props.Name}</p>
        <span>Status:</span>
        {props.ErrorStatus !== "Ok" ? <button onClick={() => redirectToErrorPage(props.ErrorReportId)}>{props.ErrorStatus}</button> : <span>{props.ErrorStatus}</span>}
        <p>DeadLine: {props.DeadLine}</p>
        <p>DaysLeft: {props.DaysLeft}</p>
        <button onClick={() => redirectToElevator(props.ElevatorId)}>Show Elevator</button>
      </div>
    )
}