import React from 'react'
import '../../Style/ElevatorIndexPanel.css'
import { Link } from "react-router-dom";

export const Panel = ({Elevator, DaysLeft}) => {
    var setBackground = (timeLeft) =>
    {
      if(Elevator.ErrorStatus === "Ok")
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
      <div className='ElevatorIndexPanelContainer' style={setBackground(DaysLeft)}>
        <Link to={"Building/"+Elevator.BuildingId}>{Elevator.BuildingName}</Link>

        <p>{Elevator.Name}</p>
        <span>Status:</span>
        {Elevator.ErrorStatus !== "Ok" ? <Link to={"Report/"+Elevator.ErrorReportId}>{Elevator.ErrorStatus}</Link> : <span>{Elevator.ErrorStatus}</span>}
        <p>DeadLine: {Elevator.DeadLine}</p>
        <p>DaysLeft: {DaysLeft}</p>
        <Link to={"Elevator/"+Elevator.ElevatorId}>Show Elevator</Link>
      </div>
    )
}