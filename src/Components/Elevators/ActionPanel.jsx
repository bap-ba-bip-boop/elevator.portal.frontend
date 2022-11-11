import React from 'react'
import {ResetElevators, ToggleFunctionality, OpenCloseDoors} from '../../Services/elevatorFunctionService.jsx';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import { ActionButton } from './ActionButton.jsx';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

const ActionPanel = ({ElevatorId}) => {
  
  const [showAlertDialouge, setShowAlertDialouge] = useState( () => false);
  const [responseMessage, setResponseMessage] = useState(() => "");

  const processResponse = ({success, value, message}) =>
  {
      var responseMessage = success ? "Success: " : "Failed: ";
      responseMessage += message
      setResponseMessage(responseMessage);
  }
  const ProcessOpenClose = () =>{
    OpenCloseDoors(ElevatorId)
    .then(response => processResponse(response));
  }
  const ProcessToggleFunctionality = () =>{
    ToggleFunctionality(ElevatorId)
    .then(response => processResponse(response));
  }
  const PreocessResetElevator = () =>
  {
    setShowAlertDialouge(true);
  }
  const acceptCloseAlertDialog = () =>
  {
    setShowAlertDialouge(false);
    ResetElevators(ElevatorId)
    .then(response => processResponse(response));
  }
  const closeAlertDialog = () =>
  {
    setShowAlertDialouge(false);
  }

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

        <h2>Button Panel:</h2>
        <ActionButton buttonFunction={ProcessOpenClose} name={"OpenClose"}/>
        <ActionButton buttonFunction={ProcessToggleFunctionality} name={"OnOff"}/>
        <ActionButton buttonFunction={PreocessResetElevator} name={"Reset"}/>
        <p>{responseMessage}</p>
    </div>
  )
}

export default ActionPanel