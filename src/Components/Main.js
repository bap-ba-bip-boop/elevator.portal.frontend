import React from 'react'
import { ElevatorView } from './Pages/Elevator/ElevatorView'
import ErrorReport from './Pages/ErrorReport/ErrorReport'
import { SelectedElevatorView } from './Pages/Elevator/SelectedElevatorView'
import { ElevatorIndex } from './Pages/Elevator/ElevatorIndex'

export const Main = (props) => {
  return (
    <main>
      {
        props.SelectedPage === "ElevatorIndex" &&
        <ElevatorIndex
          SelectPageFunction = {props.SelectPageFunction}
          SelectElevatorFunction = {props.SelectElevatorFunction}
          SelectErrorFunction = {props.SelectErrorFunction}
        />
      }
      {
        props.SelectedPage === "ElevatorView" && 
        <ElevatorView 
          ElevatorId={props.SelectedElevatorId}
          SelectPageFunction={props.SelectPageFunction}
        />
      }
      {props.SelectedPage === "" && <SelectedElevatorView/>}
      {
        props.SelectedPage === "ErrorReport" &&
        <ErrorReport
          ErrorId = {props.SelectedErrorId}
        />
      }
    </main>
  )
}
