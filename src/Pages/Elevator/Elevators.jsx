import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {useQuery} from "@tanstack/react-query";

import {useState} from "react";
import {ElevatorCard} from "../../Components/Elevators/ElevatorCard";
import {GetAllElevators} from "../../Services/elevatorFunctionService";


export const Elevators = () => {

    const [sortingValue, setSortingValue] = useState(() => "");
    const {isLoading, error, data: elevators} = useQuery({queryKey: ["elevators"], queryFn: GetAllElevators});

    if (isLoading) {
        return <Box><Typography>Loading...</Typography></Box>;
    }
    if (error) {
        return <Box><Typography>Something has happened...</Typography></Box>;
    }

    return (
        <>
            <Stack direction="row" justifyContent={"center"} spacing={2}>
                {
                    elevators?.map(Elevator =>
                        <ElevatorCard
                            key={Elevator.id}
                            Elevator={Elevator}
                        />
                    )
                }
            </Stack>
        </>
    );
};
