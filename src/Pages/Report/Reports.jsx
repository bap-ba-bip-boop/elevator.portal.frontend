import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React from 'react';
import {useQuery} from '@tanstack/react-query';
import { GetAllErrorReports } from "../../Services/reportService"
import { ReportCard } from "../../Components/Reports/ReportCard";


export const Reports = () => {

  const {isLoading, error, data:reports} = useQuery({ queryKey: ['reports'], queryFn: GetAllErrorReports });

  if(isLoading)
    return <Box><Typography>Loading...</Typography></Box>
  if(error)
    return <Box><Typography>Something has happened...</Typography></Box>

  return (
    <DetailedReports Reports={reports}/>
  )
}

const DetailedReports = ({Reports}) =>{

  return(
    <Stack direction="row" justifyContent={"center"} spacing={2}>
    {
    Reports?.map( Report => 
        <ReportCard
          key={Report.id}
          Report = {Report}
          />
        )
    }
    </Stack>
  );
}
