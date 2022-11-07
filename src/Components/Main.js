import React from 'react'
import { ElevatorView } from './Pages/Elevator/ElevatorView'
import ErrorReport from './Pages/ErrorReport/ErrorReport'
import { SelectedElevatorView } from './Pages/Elevator/SelectedElevatorView'
import { ElevatorIndex } from './Pages/Elevator/ElevatorIndex'
import { ElevatorProvider } from '../Context/ElevatorProvider'
import { usePage } from '../Context/PageProvider'


export const Main = () => {

  const selectedPage = usePage();

  return (
    <main>
      {
        selectedPage === "ElevatorIndex" &&
        <ElevatorProvider>
          <ElevatorIndex />
        </ElevatorProvider>
      }
      {
        selectedPage === "ElevatorView" && 
        <ElevatorProvider>
          <ElevatorView/>
        </ElevatorProvider>
      }
      {selectedPage === "" && <SelectedElevatorView/>}
      {
        selectedPage === "ErrorReport" &&
        <ErrorReport />
      }
    </main>
  )
}
