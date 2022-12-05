import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetAllErrorReports, GetAllCompanies } from "../../Services/reportService";
import ErrorReportFilter from "../../Components/Reports/ErrorReportFilter";

export const Reports = () => {
  const { isLoading, error, data: reports } = useQuery({ queryKey: ["reports"], queryFn: GetAllErrorReports });
  if (isLoading)
    return (
      <Box>
        <Typography>Loading...</Typography>
      </Box>
    );
  if (error)
    return (
      <Box>
        <Typography>Something has happened...</Typography>
      </Box>
    );

  return <DetailedReports Reports={reports} />;
};

const DetailedReports = ({ Reports }) => {
  return (
    <>
      <ErrorReportFilter Reports={Reports} />
    </>
  );
};
