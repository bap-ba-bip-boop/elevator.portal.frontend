import {Box, Tab, Tabs} from "@mui/material";
import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
      <Box sx={{ borderBottom: 1, marginBottom:5, borderColor: 'divider'}}  >
        <Tabs value={"Elevators"} aria-label="basic tabs example" centered>
          <Tab component={Link} to={"/"} value={"Elevators"} label="Elevators" />
          <Tab component={Link} to={"ErrorReports"} value={"Reports"} label="Error Reports" />
          <Tab component={Link} label="Statistics" to={"Statistics"} value={"Statistics"} />
        </Tabs>
      </Box>
  );
};
