import React, {useState} from 'react'
import { ElevatorIndexPanel } from '../../ElevatorIndexPanel';

export const ElevatorIndex = (props) => {

    var [sortingValue, setSortingValue] = useState("shortestErrors")
    
    var calculateDaysLeft = (deadline) =>
    {
        var date1 = new Date(deadline);
        var date2 = new Date();

        var timediff = date1.getTime() - date2.getTime();
        var daydiff = timediff / (1000*3600*24);

        return Math.round(daydiff);
    }

    const orderby = (elevatorList) => {
        var returnList;
        if(sortingValue === "shortestDate")
        {
            returnList = elevatorList.sort( (elevator1, elevator2) => calculateDaysLeft(elevator1.DeadLine) > calculateDaysLeft(elevator2.DeadLine));
        }
        if(sortingValue === "errorsFirst")
        {
            returnList = elevatorList.sort((elevator1) => elevator1.ErrorStatus === "Ok");
        }
        if(sortingValue === "shortestErrors")
        {
            returnList = elevatorList.sort(elevator => elevator.ErrorStatus === "Ok");
            const splitIndex = returnList.findIndex(elevator => elevator.ErrorStatus === "Ok");
            var errorList = returnList.slice(0, splitIndex );
            errorList = errorList.sort( (elevator1, elevator2) => calculateDaysLeft(elevator1.DeadLine) > calculateDaysLeft(elevator2.DeadLine));
            var okList = returnList.slice(splitIndex).sort( (elevator1, elevator2) => calculateDaysLeft(elevator1.DeadLine) > calculateDaysLeft(elevator2.DeadLine));

            returnList = errorList.concat(okList);
        }

        return returnList;
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
            DeadLine: DateTime(5)
        },
        {
            ElevatorId: "2",
            Name: "Elevator2",
            ErrorStatus: "Inte Ok",
            ErrorReportId: "13",
            BuildingName: "Building2",
            BuildingId: "22",
            DeadLine: DateTime(3)
        },
        {
            ElevatorId: "3",
            Name: "Elevator3",
            ErrorStatus: "Ok",
            ErrorReportId: "",
            BuildingName: "Building3",
            BuildingId: "23",
            DeadLine: DateTime(4)
        },
        {
            ElevatorId: "4",
            Name: "Elevator4",
            ErrorStatus: "Inte Ok",
            ErrorReportId: "",
            BuildingName: "Building1",
            BuildingId: "21",
            DeadLine: DateTime(5)
        },
        {
            ElevatorId: "5",
            Name: "Elevator5",
            ErrorStatus: "Ok",
            ErrorReportId: "13",
            BuildingName: "Building2",
            BuildingId: "22",
            DeadLine: DateTime(3)
        },
        {
            ElevatorId: "6",
            Name: "Elevator6",
            ErrorStatus: "Inte Ok",
            ErrorReportId: "",
            BuildingName: "Building3",
            BuildingId: "23",
            DeadLine: DateTime(2)
        },
        {
            ElevatorId: "7",
            Name: "Elevator7",
            ErrorStatus: "Inte Ok",
            ErrorReportId: "",
            BuildingName: "Building3",
            BuildingId: "23",
            DeadLine: DateTime(2)
        },
        {
            ElevatorId: "8",
            Name: "Elevator8",
            ErrorStatus: "Ok",
            ErrorReportId: "",
            BuildingName: "Building3",
            BuildingId: "23",
            DeadLine: DateTime(2)
        }
    ];
    

  return (
    <>
        {
        orderby(Elevators).map( elevator => 
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
            SelectPageFunction={props.SelectPageFunction}
            SelectElevatorFunction={props.SelectElevatorFunction}
            SelectErrorFunction={props.SelectErrorFunction}
            />
            )
        }
    </>
  )
}
