import {Container} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
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
            <Container
                maxWidth={"xl"}
                direction="column"
                style={{minHeight: "calc(100vh - 50px"}}
            >
                <Header/>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </Container>
        </ThemeProvider>
    );
};
