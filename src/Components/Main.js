import React from 'react'
import { ElevatorView } from './Pages/ElevatorView'
import ErrorReport from './Pages/ErrorReport'
import { SelectedElevatorView } from './Pages/SelectedElevatorView'
import { ElevatorIndex } from './Pages/ElevatorIndex'

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
