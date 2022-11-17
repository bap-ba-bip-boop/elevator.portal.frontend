import React from "react";
import {Link as MuiLink} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';

export const StyledLink = (props) => {
    return (
        <MuiLink component={RouterLink} {...props}>{props.children}</MuiLink>
    );
};