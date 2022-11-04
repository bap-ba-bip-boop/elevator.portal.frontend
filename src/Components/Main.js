import React from 'react'
import { ElevatorView } from './Pages/ElevatorView'
import ErrorReport from './Pages/ErrorReport'
import { SelectedElevatorView } from './Pages/SelectedElevatorView'
import { ElevatorIndex } from './Pages/ElevatorIndex'

export const Main = (props) => {
  return (
    <main>
        {props.selectedPage === "ElevatorIndex" && <ElevatorView ElevatorId={props.SelectedElevatorId}/>}
        {props.selectedPage === "SelectedElevatorView" && <SelectedElevatorView />}
        {props.selectedPage === "ErrorReport" && <ErrorReport />}
        {props.selectedPage === "ElevatorIndex" && <ElevatorIndex />}
    </main>
  )
}
