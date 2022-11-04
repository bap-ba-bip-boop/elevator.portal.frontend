import React from 'react'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'
import './override.css'

export const App = () => {

  //4092b9f8-3183-426f-b8f6-d66721e09da1

  var SelectedElevatorId = "601baa30-5077-4614-a211-603e09034947";

  return (
    <>
      <Header/>
      <Main SelectedElevatorId = {SelectedElevatorId}/>
      <Footer/>
    </>
  )
}
