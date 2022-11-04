import React from 'react'
import { ElevatorView } from './Pages/ElevatorView'

export const Main = (props) => {
  return (
    <main>
        <ElevatorView ElevatorId={props.SelectedElevatorId}/>
    </main>
  )
}
