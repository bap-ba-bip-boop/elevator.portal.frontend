import {Button} from "@mui/material";
import React from 'react'

export const ActionButton = ({buttonFunction, name}) => {

  return (
    <Button onClick={() => buttonFunction()}>{name}</Button>
  )
}
