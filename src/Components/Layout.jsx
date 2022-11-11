import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Footer } from './Footer';
import { Header } from './Header';
import { Navbar } from "./Navbar";

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
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}
