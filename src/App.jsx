import { QueryClient, QueryClientProvider} from 'react-query';
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Components/Base/Layout";
import { Elevators } from "./Pages/Elevator/Elevators";
import { Elevator } from "./Pages/Elevator/Elevator";
import { Reports } from "./Pages/Report/Reports.jsx";
import { Statistics } from "./Pages/Statistics/Statistics";
import { CreateErrorReport } from "./Pages/Report/CreateErrorReport";
import "./Style/override.css";

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route index element={<Elevators/>}/>
                    <Route path="Elevator">
                      <Route path=":ElevatorId" element={<Elevator/>}/>
                      <Route path=":ElevatorId/CreateReport" element={<CreateErrorReport/>}/>
                    </Route>
                    <Route path="ErrorReports">
                        <Route index element={<Reports/>}/>
                        
                    </Route>
                    <Route path="Statistics" element={<Statistics/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                  </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};
