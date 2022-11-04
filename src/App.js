import './Style/override.css'
import React from 'react'
import { Main } from './Components/Main';

export const App = () => {
  var selectedPage = "ElevatorIndex";
  return (
    <>
      <Main selectedPage={selectedPage}/>
    </>
  )
}
