import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Base/Layout.jsx";
import { Elevator } from "./Pages/Elevator/Elevator";
import { Elevators } from "./Pages/Elevator/Elevators";
import { ErrorReport } from "./Pages/Report/ErrorReport";
import { Reports } from "./Pages/Report/Reports.jsx";
import { Statistics } from "./Pages/Statistics/Statistics";
import { Login } from "./Pages/Login/Login";
import UpdateErrorReport from "./Pages/Report/UpdateErrorReport";

import { UserProvider } from "./Context/userContext";

import "./Style/override.css";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <UserProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Elevators />} />
            <Route path="Login" element={<Login />} />
            <Route path="Elevator/:ElevatorId" element={<Elevator />} />
            <Route path="ErrorReports" element={<Reports/>} />
            <Route path="ErrorReports/:ReportId" element={<ErrorReport />} />
            <Route path="ErrorReports/:ReportId/update" element={<UpdateErrorReport />} />
            <Route path="Statistics" element={<Statistics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </UserProvider>
  );
};
