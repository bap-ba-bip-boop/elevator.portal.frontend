import React, { useState } from 'react'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'
import './Style/override.css'

export const App = () => {

  //4092b9f8-3183-426f-b8f6-d66721e09da1asd

  var [selectedElevatorId, setSelectedElevatorId] = useState("");
  var [selectedErrorId, setSelectedErrorId] = useState("");
  var [selectedPage, setSelectedPage] = useState("ElevatorIndex");


  //setSelectedPage()
  return (
    <>
      <Header/>
      <Main 
        SelectedElevatorId = {selectedElevatorId}
        SelectElevatorFunction = {setSelectedElevatorId}
        SelectedPage = {selectedPage}
        SelectPageFunction={setSelectedPage}
        SelectedErrorId = {selectedErrorId}
        SelectErrorFunction = {setSelectedErrorId}
        />
      <Footer/>
    </>
  )
}
