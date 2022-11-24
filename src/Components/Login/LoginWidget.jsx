import Box from "@mui/material/Box";
import { useUserContext } from "../../Context/userContext";
import { NoAccountLink } from "./NoAccountLink";
import { LogedInPanel } from "./LogedInPanel";

export const LoginWidget = () => {

    const {user} = useUserContext();

    if(user !== null)
    return (
    <Box position={"absolute"} right={"0"} marginTop={4}>
        <LogedInPanel /> 
    </Box>
    );

    return(
    <Box position={"absolute"} right={"0"} marginTop={4}>
        <NoAccountLink />
    </Box>
    );
}