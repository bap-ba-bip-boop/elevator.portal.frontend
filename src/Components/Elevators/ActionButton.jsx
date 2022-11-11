import React from 'react'

export const ActionButton = ({buttonFunction, name}) => {



  return (
    <button onClick={() => buttonFunction()}>{name}</button>
  )
}
