import React from 'react'
import { ElevatorIndex } from './Pages/ElevatorIndex'

export const Main = (props) => {
  return (
    <main>
        {props.selectedPage === "ElevatorIndex" && <ElevatorIndex />}
    </main>
  )
}
