import {Box, ButtonGroup, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";
import React, {useState} from "react";
import {useElevatorContext} from "../../../Context/ElevatorContext.jsx";
import {
    MoveToFloor,
    OpenCloseDoors,
    ResetElevators,
    ToggleFunctionality
} from "../../../Services/elevatorFunctionService.jsx";
import FloorPanel from "../Floor/FloorPanel.jsx";
import {ActionButton} from "./ActionButton.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props}/>;
});

const ActionPanel = () => {
    const {id: ElevatorId, selectionValues} = useElevatorContext();
    const [showAlertDialog, setShowAlertDialog] = useState(() => false);
    const [responseMessage, setResponseMessage] = useState(() => "");
    const selectionCount = selectionValues?.length;

    const processResponse = ({success, value, message}) => {
        var responseMessage = success ? "Success: " : "Failed: ";
        responseMessage += message;
        setResponseMessage(responseMessage);
    };

    const ProcessChangeFloor = (currentFloor, floor) => {
        switch (floor) {
            case "0":
                setResponseMessage("Nice try...");
                return;
            case currentFloor:
                setResponseMessage("You cannot go to the floor you are currently on...");
                return;
        }

        MoveToFloor(ElevatorId, {FloorNumber: floor, WeightAmount: "0"})
            .then(response => processResponse(response));
    };

    const ProcessOpenClose = () => {
        OpenCloseDoors(ElevatorId)
            .then(response => processResponse(response));
    };
    const ProcessToggleFunctionality = () => {
        ToggleFunctionality(ElevatorId)
            .then(response => processResponse(response));
    };
    const ProcessResetElevator = () => {
        setShowAlertDialog(true);
    };

    const acceptCloseAlertDialog = () => {
        setShowAlertDialog(false);
        ResetElevators(ElevatorId, {"keys": selectionValues})
            .then(response => processResponse(response));
    };
    const closeAlertDialog = () => {
        setShowAlertDialog(false);
    };

    return (
        <>
            <Dialog
                open={showAlertDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeAlertDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Are you sure you want to reset the following keys?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {selectionValues?.map((value) => <span key={value}>{value}</span>)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeAlertDialog}>No</Button>
                    <Button onClick={acceptCloseAlertDialog}>Yes</Button>
                </DialogActions>
            </Dialog>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <Typography variant={"h6"} marginBottom={1}>Button Panel</Typography>
                <FloorPanel changeFloor={ProcessChangeFloor}/>
                <ButtonGroup size="large" aria-label="large button group">
                    <ActionButton buttonFunction={ProcessOpenClose} name={"Open/Close"}/>
                    <ActionButton buttonFunction={ProcessToggleFunctionality} name={"On/Off"}/>
                    <ActionButton buttonFunction={ProcessResetElevator} name={"Reset"}
                                  isDisabled={(selectionCount === 0)}
                    />
                </ButtonGroup>
                <p>{responseMessage}</p>
            </Box>
        </>
    );
};

export default ActionPanel;