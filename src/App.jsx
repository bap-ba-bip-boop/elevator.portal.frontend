import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Components/Layout";
import {Elevator} from "./Pages/Elevator/Elevator";
import {Elevators} from "./Pages/Elevator/Elevators";
import {Reports} from "./Pages/Report/Reports.jsx";
import {ErrorReport} from "./Pages/Report/ErrorReport";
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
                        <Route path="ErrorReports" element={<Reports/>}/>
                        <Route path="ErrorReports/:ReportId" element={<ErrorReport/>}/>
                        <Route path="Statistics" element={<Statistics/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};
