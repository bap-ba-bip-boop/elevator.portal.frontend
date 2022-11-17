import {Button} from "@mui/material";
import React from 'react'

export const ActionButton = ({buttonFunction, name, isDisabled = false}) => {

  return (
    <Button disabled={isDisabled} onClick={() => buttonFunction()}>{name}</Button>
  )
}