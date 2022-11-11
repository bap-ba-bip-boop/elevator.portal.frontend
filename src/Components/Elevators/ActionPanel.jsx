import React from 'react'
import {ToggleFunctionality} from '../../Services/elevatorServices.jsx';

const ActionPanel = ({Elevator: {id}}) => {

  const InlineFunctionlity = async(Id) => {
    await ToggleFunctionality(Id).then((res) => {
      console.log(res);
    });
  }

  return (
      <>

        <button type="button" onClick={()=>InlineFunctionlity(id)}>
            Disable
        </button>
      </>
  )
}

export default ActionPanel