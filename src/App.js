import React from 'react'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'
import './override.css'

export const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
