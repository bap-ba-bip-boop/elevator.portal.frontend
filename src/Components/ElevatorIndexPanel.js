import React from 'react'
import '../Style/ElevatorIndexPanel.css'

export const ElevatorIndexPanel = (props) => {

    var redirectToErrorPage = (errorId) =>
    {
        console.log(`redirected to error page for error report with ID: ${errorId}`);
        props.SelectPageFunction("ErrorReport");
        props.SelectErrorFunction(errorId);
    }
    var redirectToBuildingPage = (buildingId) =>
    {
      console.log(`redirected to building page for building with ID: ${buildingId}`);
      //props.SelectPageFunction("ErrorReport");
    }
    var redirectToElevator = (elevatorId) =>
    {
      console.log(`redirected to elevator page for elevator with ID: ${elevatorId}`);
      props.SelectPageFunction("ElevatorView");
      props.SelectElevatorFunction(elevatorId);
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
        <a href='#' onClick={() => redirectToBuildingPage(props.BuildingId)}><h2>{props.BuildingName}</h2></a>

        <p>{props.Name}</p>
        <span>Status:</span>
        {props.ErrorStatus !== "Ok" ? <a href='#' onClick={() => redirectToErrorPage(props.ErrorReportId)}>{props.ErrorStatus}</a> : <span>{props.ErrorStatus}</span>}
        <p>DeadLine: {props.DeadLine}</p>
        <p>DaysLeft: {props.DaysLeft}</p>
        <a href='#' onClick={() => redirectToElevator(props.ElevatorId)}>Show Elevator</a>
      </div>
    )
}