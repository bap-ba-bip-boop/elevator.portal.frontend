import Stack from "@mui/material/Stack";
import React, {useState} from "react";
import {Panel} from "../../Components/Elevators/Panel";
import {GetAllElevators} from "../../Services/elevatorFunctionService";

export const Elevators = () => {

    var [sortingValue, setSortingValue] = useState(() => "");
    var [elevators, SetElevators] = useState([]);
    
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
    useState(() => {
        GetAllElevators()
        .then(
            elevators => SetElevators(elevators)
        )
      }, []);
    
    return (
    <>
        <div>
            <button onClick={() => setSortingValue("shortestErrors")}>See Errors</button>
            {sortingValue !== "" && <button onClick={() => setSortingValue("")}>reset</button>}
        </div>
        
        <Stack direction="row" justifyContent={"center"} spacing={2}>
          {
          elevators.map( Elevator => 
              <Panel
                key={Elevator.id}
                Elevator = {Elevator}
                DaysLeft = {calculateDaysLeft(Elevator.DeadLine)}
                />
              )
          }
        </Stack>
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