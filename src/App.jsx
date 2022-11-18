import { QueryClient, QueryClientProvider} from 'react-query';
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Components/Base/Layout";
import { Elevators } from "./Pages/Elevator/Elevators";
import { Elevator } from "./Pages/Elevator/Elevator";
import { Reports } from "./Pages/Report/Reports.jsx";
import { Statistics } from "./Pages/Statistics/Statistics";
import { ErrorReport } from "./Pages/Report/ErrorReport";
import "./Style/override.css";

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient} contextSharing={true}>
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
