import {Box, Tab, Tabs} from "@mui/material";
import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
    const [value, setValue] = useState(() => 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
      <Box sx={{ borderBottom: 1, marginBottom:5, borderColor: 'divider'}}  >
        <Tabs value={value} aria-label="basic tabs example" onChange={handleChange} centered>
          <Tab component={Link} to={"/"} label="Elevators" />
          <Tab component={Link} to={"ErrorReports"} label="Error Reports" />
          <Tab component={Link} to={'Statistics'} label="Statistics" value={"Statistics"} />
        </Tabs>
      </Box>
  );
};
