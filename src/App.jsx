import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './Components/Layout';
import { Elevators } from './Pages/Elevator/Elevators';
import { Elevator } from './Pages/Elevator/Elevator';
import { Reports } from './Pages/Report/Reports';
import { Statistics } from './Pages/Statistics/Statistics';
import {Report} from './Pages/Report/Report';
import './Style/override.css'



export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Elevators />} />
            <Route path='Elevator/:ElevatorId' element={<Elevator />} />
            <Route path='Reports' element={<Reports/>}/>
            <Route path='Report/:ReportId' element={<Report />} />
            <Route path='Statistics' element={<Statistics/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
