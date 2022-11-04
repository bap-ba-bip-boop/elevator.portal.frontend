import React from 'react'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'
import './Style/override.css'
import TechnicianRequestBtn from './Components/TechnicianRequestBtn'

export const App = () => {

  //4092b9f8-3183-426f-b8f6-d66721e09da1asd

  var SelectedElevatorId = "601baa30-5077-4614-a211-603e09034947";

  return (
    <>
      <Header/>
      <Main SelectedElevatorId = {SelectedElevatorId} selectedPage = {"ErrorReport"}/>
      <Footer/>
    </>
  )
}
