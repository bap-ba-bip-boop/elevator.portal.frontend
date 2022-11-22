import CheckIcon from "@mui/icons-material/Check";
import {Box, Grid, IconButton, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useRef} from "react";
import {useElevatorContext} from "../../../Context/ElevatorContext.jsx";

const FloorPanel = ({changeFloor}) => {
    const {floor} = useElevatorContext();
    const floorRef = useRef(0);

    function SubmitButton() {
        return <IconButton edge="end" color="primary" onClick={handleFloorChange}>
            < CheckIcon/>
        </IconButton>;
    }

    const handleFloorChange = () => {
        changeFloor(floor, floorRef.current.value);
    };

    return (
        <>
            <Box flexDirection={"row"} justifyContent={"center"} marginY={3}>
                <Typography justifyContent={"center"} display={"flex"}>You are currently on floor {floor}</Typography>
                <Grid container columns={16} marginTop={2}>
                    <Grid item xs>
                        <Typography display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={1}>
                            Go to floor:
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <TextField id="floor" label={"Floor"} variant="outlined" size={"small"}
                                   inputMode={"numeric"}
                                   inputRef={floorRef}
                                   InputProps={{endAdornment: <SubmitButton/>}}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default FloorPanel;