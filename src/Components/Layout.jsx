import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Footer } from './Footer';
import { Header } from './Header';
import { Navbar } from "./Navbar";


export const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
