import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./Components/Base/Layout.jsx";
import {Elevator} from "./Pages/Elevator/Elevator";
import {Elevators} from "./Pages/Elevator/Elevators";
import {ErrorReport} from "./Pages/Report/ErrorReport";
import {Reports} from "./Pages/Report/Reports.jsx";
import {Statistics} from "./Pages/Statistics/Statistics";
import "./Style/override.css";

const queryClient = new QueryClient();


export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route index element={<Elevators/>}/>
                    <Route path="Elevator/:ElevatorId" element={<Elevator/>}/>
                    <Route path="ErrorReports">
                        <Route index element={<Reports/>}/>
                        <Route path=":ReportId" element={<ErrorReport/>}/>
                    </Route>
                    <Route path="Statistics" element={<Statistics/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};
