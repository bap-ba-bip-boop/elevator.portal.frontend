import Stack from "@mui/material/Stack";
import {useEffect, useState} from "react";
import {Panel} from "../../Components/Elevators/Panel";
import {GetAllElevators} from "../../Services/elevatorServices.jsx";

export const Elevators = () => {

    const [sortingValue, setSortingValue] = useState(() => "");
    const [elevators, SetElevators] = useState([]);

  useEffect(() => {
    GetAllElevators().then(SetElevators);
  }, []);

  return (
    <>
        <Stack direction="row" justifyContent={"center"} spacing={2}>
          {
          elevators.map( Elevator => 
              <Panel
                key={Elevator.id}
                Elevator = {Elevator}
                />
              )
          }
        </Stack>
      <div>
        <button onClick={() => setSortingValue("shortestErrors")}>See Errors</button>
        {sortingValue !== "" && <button onClick={() => setSortingValue("")}>reset</button>}
      </div>
    </>
  );
};
