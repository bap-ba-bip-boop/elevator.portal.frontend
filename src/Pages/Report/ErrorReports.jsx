import React from 'react'
import { GetAllErrorReports } from "../../Services/errorReportServices.jsx";

export const ErrorReports = () => {


  useState(() => {
    GetAllErrorReports().then((errorReports) => SetErrorReports(errorReports));
  }, []);


  return (
    <div>ErrorReports</div>
  )
}
