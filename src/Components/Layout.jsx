import React from "react";
import { Outlet, Link } from "react-router-dom";
import AddTechToErrRepInput from "./AddTechToErrRepInput";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
<<<<<<< HEAD
import TechniciansList from "./TechniciansList";

export const Layout = () => {
  return (
    <>
      <AddTechToErrRepInput />
=======

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={darkTheme}>
>>>>>>> 978852672a4ce88baeef433f746e9cbfd1b0c113
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
<<<<<<< HEAD
    </>
  );
};
=======
    </ThemeProvider>
  )
}
>>>>>>> 978852672a4ce88baeef433f746e9cbfd1b0c113
