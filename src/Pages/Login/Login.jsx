import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React from 'react'
import { getSecondLine } from '../../Services/employeeServices';

import {useQuery} from '@tanstack/react-query';
import { EmployeeLoginCard } from "../../Components/Login/EmployeeLoginCard";

export const Login = () => {

    const {isLoading, error, data:secondLineEmployees} = useQuery({ queryKey: ['secondLineEmployees'], queryFn: getSecondLine });

    if(isLoading)
        return <Box><Typography>Loading...</Typography></Box>
    if(error)
        return <Box><Typography>Something has happened...</Typography></Box>
    return(
        <LoginDetailed employees={secondLineEmployees}/>
    );
}

const LoginDetailed = ({employees}) => {

    return (
    <Box>
        <Typography variant="h4">Select an Account</Typography>
        <Stack direction="row" justifyContent={"center"} spacing={2}>
        {
            employees.map(employee => 
                <EmployeeLoginCard 
                key={employee.id}
                Employee={employee}
                />
            )
        }
        </Stack>
    </Box>
    )
}
