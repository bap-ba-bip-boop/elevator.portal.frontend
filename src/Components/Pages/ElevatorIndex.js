import React from 'react'
import { ElevatorIndexPanel } from '../ElevatorIndexPanel';

export const ElevatorIndex = () => {

    
    var calculateDaysLeft = (deadline) =>
    {
        var date1 = new Date(deadline);
        var date2 = new Date();

        var timediff = date1.getTime() - date2.getTime();
        var daydiff = timediff / (1000*3600*24);

        return Math.round(daydiff);
    }

    //Temp Method
    var DateTime = (dayOffset = 0) =>
    {
        let oneDay = 1000 * 60 * 60 * 24;
        var today = new Date();

        var date = new Date(today.getTime() + oneDay*dayOffset);

        return date.toDateString();
    }
    //tempList
    var Elevators = [
        {
            ElevatorId: "1",
            Name: "Elevator1",
            ErrorStatus: "Ok",
            ErrorReportId: "",
            BuildingName: "Building1",
            BuildingId: "21",
            DeadLine: DateTime()
        },
        {
            ElevatorId: "3",
            Name: "Elevator2",
            ErrorStatus: "Inte Ok",
            ErrorReportId: "13",
            BuildingName: "Building2",
            BuildingId: "22",
            DeadLine: DateTime(2)
        },
        {
            ElevatorId: "2",
            Name: "Elevator3",
            ErrorStatus: "Ok",
            ErrorReportId: "",
            BuildingName: "Building3",
            BuildingId: "23",
            DeadLine: DateTime(4)
        }
    ];
    

  return (
    <>
        {
        Elevators.map( elevator => 
            <ElevatorIndexPanel
            key = {elevator.ElevatorId}
            ElevatorId = {elevator.ElevatorId}
            Name = {elevator.Name}
            ErrorStatus = {elevator.ErrorStatus}
            ErrorReportId = {elevator.ErrorReportId}
            BuildingName = {elevator.BuildingName}
            BuildingId = {elevator.BuildingId}
            DeadLine = {elevator.DeadLine}
            DaysLeft = {calculateDaysLeft(elevator.DeadLine)}
            />
            )
        }
    </>
  )
}
