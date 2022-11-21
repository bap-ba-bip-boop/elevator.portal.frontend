import {Button} from "@mui/material";
import React from 'react'

export const ActionButton = ({buttonFunction, name, functionArgs = null}) => {

  return (
    <Button onClick={() => buttonFunction(functionArgs)}>{name}</Button>
  )
}
