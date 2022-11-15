import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./Components/Layout";
import { Elevators } from "./Pages/Elevator/Elevators";
import { Elevator } from "./Pages/Elevator/Elevator";
import { ErrorReports } from "./Pages/Report/ErrorReports";
import { Statistics } from "./Pages/Statistics/Statistics";
import { ErrorReport } from "./Pages/Report/ErrorReport";
import "./Style/override.css";



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Elevators />} />
          <Route path="Elevator/:ElevatorId" element={<Elevator />} />
          <Route path="Reports" element={<ErrorReports />} />
          <Route path="Report/:ReportId" element={<ErrorReport />} />
          <Route path="Statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
