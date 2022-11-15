import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {useState} from "react";
import {ElevatorCard} from "../../Components/Elevators/ElevatorCard";
import { GetAllElevators } from "../../Services/elevatorFunctionService";
import {useQuery} from '@tanstack/react-query';


export const Elevators = () => {

    const [sortingValue, setSortingValue] = useState(() => "");
    const {isLoading, error, data:elevators} = useQuery({ queryKey: ['elevators'], queryFn: GetAllElevators });

    if(isLoading)
        return <Box><Typography>Loading...</Typography></Box>
    if(error)
        return <Box><Typography>Something has happened...</Typography></Box>

  return (
    <>
        <Stack direction="row" justifyContent={"center"} spacing={2}>
          {
          elevators?.map( Elevator => 
              <ElevatorCard
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
