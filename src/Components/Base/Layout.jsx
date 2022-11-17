import {Box, Container} from "@mui/material";

import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer.jsx";
import {Header} from "./Header.jsx";
import {Navbar} from "./Navbar.jsx";


const theme = createTheme({
    palette: {
        mode: "light"
    }
});

export const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box minHeight={'95vh'}>
                    <Header/>
                    <Navbar/>
                    <Outlet/>
                    <Footer/>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
