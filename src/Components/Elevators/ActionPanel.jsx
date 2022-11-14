import {Box, ButtonGroup, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";
import React, {useState} from "react";
import {OpenCloseDoors, ResetElevators, ToggleFunctionality} from "../../Services/elevatorFunctionService.jsx";
import {ActionButton} from "./ActionButton.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props}/>;
});

const ActionPanel = ({ElevatorId, DeviceMeta}) => {

    const [showAlertDialouge, setShowAlertDialouge] = useState(() => false);
    const [responseMessage, setResponseMessage] = useState(() => "");

    const processResponse = ({success, value, message}) => {
        var responseMessage = success ? "Success: " : "Failed: ";
        responseMessage += message;
        setResponseMessage(responseMessage);
    };
    const ProcessOpenClose = () => {
        OpenCloseDoors(ElevatorId)
            .then(response => processResponse(response));
    };
    const ProcessToggleFunctionality = () => {
        ToggleFunctionality(ElevatorId)
            .then(response => processResponse(response));
    };
    const PreocessResetElevator = () => {
        setShowAlertDialouge(true);
    };
    const acceptCloseAlertDialog = () => {
        setShowAlertDialouge(false);
        ResetElevators(ElevatorId)
            .then(response => processResponse(response));
    };
    const closeAlertDialog = () => {
        setShowAlertDialouge(false);
    };

    return (
        <div>
            <Dialog
                open={showAlertDialouge}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeAlertDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure you want to reset the Elevators Metadata?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeAlertDialog}>No</Button>
                    <Button onClick={acceptCloseAlertDialog}>Yes</Button>
                </DialogActions>
            </Dialog>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'}}>
                <Typography variant={"h6"} marginBottom={1}>Button Panel</Typography>
            <ButtonGroup size="large" aria-label="large button group">
                <ActionButton buttonFunction={ProcessOpenClose} name={"Open/Close"}/>
                <ActionButton buttonFunction={ProcessToggleFunctionality} name={"On/Off"}/>
                <ActionButton buttonFunction={PreocessResetElevator} name={"Reset"}/>
            </ButtonGroup>
            <p>{responseMessage}</p>
            </Box>
        </div>
    );
};

export default ActionPanel;