import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"

import React from 'react'
import { StyledLink } from "../Base/StyledLink";

export const LoginWidget = () => {



    return (
    <Box position={"absolute"} right={"0"} marginTop={4}>
        <StyledLink to={"Login"}>Login</StyledLink>
    </Box>
    )
}

/*
<Typography>
  Logged in as:
</Typography>
<Typography>
    {"employeeName"}
</Typography>
<Button>Logout</Button>
*/