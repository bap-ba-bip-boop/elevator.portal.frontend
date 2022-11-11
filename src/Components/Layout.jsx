import React from "react";
import { Outlet, Link } from "react-router-dom";
import AddTechToErrRepInput from "./AddTechToErrRepInput";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import TechniciansList from "./TechniciansList";

export const Layout = () => {
  return (
    <>
      <AddTechToErrRepInput />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
