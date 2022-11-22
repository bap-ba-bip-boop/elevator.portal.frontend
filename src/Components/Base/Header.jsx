import {Box} from "@mui/material";
import React from "react";
import { LoginWidget } from "../Login/LoginWidget";

export const Header = () => {

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} position={"relative"}>
      <Box typography={"h4"} textAlign={"center"} marginTop={4} marginBottom={1}>OTIS Web Portal</Box>
      <LoginWidget/>
    </Box>
  )
}
