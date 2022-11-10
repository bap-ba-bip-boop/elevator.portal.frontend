import React from 'react'
import {ToggleFunctionality} from '../../Services/elevatorFunctionService.jsx';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

const ActionPanel = ({Elevator}) => {
  
  const [showAlertDialouge, setShowAlertDialouge] = useState( () => false);

  const ResetElevator = (event) =>
  {
    setShowAlertDialouge(true);
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
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeAlertDialog}>Disagree</Button>
            <Button onClick={closeAlertDialog}>Agree</Button>
          </DialogActions>
        </Dialog>
        <h2>Button Panel:</h2>
        <button  onClick={() => ProcessOpenClose()}>Open Doors</button>
        <button  onClick={() => ProcessOpenClose()}>Disable</button>
        <button  onClick={() => ResetElevator()}>Reset Elevator</button>

    </div>
  )
}

export default ActionPanel