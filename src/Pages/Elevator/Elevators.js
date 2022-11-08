import React, {useState} from 'react'
import { Panel } from '../../Components/Elevators/Panel';

export const Elevators = () => {

    var [sortingValue, setSortingValue] = useState(() => "");
    
    const calculateDaysLeft = (deadline) =>
    {
        var date1 = new Date(deadline);
        var date2 = new Date();

        var timediff = date1.getTime() - date2.getTime();
        var daydiff = timediff / (1000*3600*24);

        return Math.round(daydiff);
    }

    const orderby = (elevatorList) => {
        var returnList = elevatorList;

        const sortByShortestDaysLeft = (list) =>
        {
            return list.sort( (elevator1, elevator2) => calculateDaysLeft(elevator1.DeadLine) > calculateDaysLeft(elevator2.DeadLine));
        } 

        if(sortingValue === "shortestErrors")
        {
            returnList = returnList.sort(elevator => elevator.ErrorStatus === "Ok");
            const splitIndex = returnList.findIndex(elevator => elevator.ErrorStatus === "Ok");
            returnList = sortByShortestDaysLeft(returnList.slice(0, splitIndex)).concat(sortByShortestDaysLeft(returnList.slice(splitIndex)));
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
        <div>
            <button onClick={() => setSortingValue("shortestErrors")}>See Errors</button>
            {sortingValue !== "" && <button onClick={() => setSortingValue("")}>reset</button>}
        </div>
        <section>
        {
        orderby(Elevators).map( elevator => 
            <Panel
            key = {elevator.ElevatorId}
            Elevator = {elevator}
            DaysLeft = {calculateDaysLeft(elevator.DeadLine)}
            />
            )
        }
        </section>
    </>
    )
}
/*
key = {elevator.ElevatorId}
      ElevatorId = {elevator.ElevatorId}
      Name = {elevator.Name}
      ErrorStatus = {elevator.ErrorStatus}
      ErrorReportId = {elevator.ErrorReportId}
      BuildingName = {elevator.BuildingName}
      BuildingId = {elevator.BuildingId}
      DeadLine = {elevator.DeadLine}
*/