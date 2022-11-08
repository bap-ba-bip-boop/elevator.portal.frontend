import React from 'react'
import {ToggleFunctionality} from '../../Services/elevatorFunctionService.jsx';
import { useState } from 'react';


const ActionPanel = ({Elevator}) => {

  return (
    <button type="button" onClick={()=>ToggleFunctionality(Elevator.ElevatorId)}>Disable</button>
  )
}

export default ActionPanel