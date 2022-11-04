import React from 'react'
import { ElevatorView } from './Pages/ElevatorView'
import ErrorReport from './Pages/ErrorReport'
import { SelectedElevatorView } from './Pages/SelectedElevatorView'

export const Main = (props) => {
  return (
    <main>
        <ElevatorView ElevatorId={props.SelectedElevatorId}/>
        <SelectedElevatorView/>
        <ErrorReport />
    </main>
  )
}
