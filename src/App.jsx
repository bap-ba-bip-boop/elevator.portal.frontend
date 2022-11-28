import { QueryClient, QueryClientProvider} from 'react-query';
import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./Components/Base/Layout.jsx";
import {Elevator} from "./Pages/Elevator/Elevator";
import {Elevators} from "./Pages/Elevator/Elevators";
import { CreateErrorReport } from './Pages/Report/CreateErrorReport.jsx';
import {Reports} from "./Pages/Report/Reports.jsx";
import {Statistics} from "./Pages/Statistics/Statistics";
import UpdateErrorReport from "./Pages/Report/UpdateErrorReport";

import "./Style/override.css";


const queryClient = new QueryClient();

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Elevators />} />
                    <Route path=":ElevatorId/CreateReport" element={<CreateErrorReport />} />
                    <Route path="Elevator/:ElevatorId" element={<Elevator />} />
                    <Route path="ErrorReports">
                        <Route index element={<Reports />} />
                        <Route path=":ReportId" element={<CreateErrorReport />} />
                        <Route path=":ReportId/update" element={<UpdateErrorReport />} />
                    </Route>
                    <Route path="Statistics" element={<Statistics/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
