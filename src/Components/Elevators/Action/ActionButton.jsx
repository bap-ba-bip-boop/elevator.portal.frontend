import {Button} from "@mui/material";
import React from 'react'

export const ActionButton = ({buttonFunction, name, isDisabled = false, functionArgs = null}) => {

  return (
    <Button disabled={isDisabled} onClick={() => buttonFunction(functionArgs)}>{name}</Button>
  )
}
