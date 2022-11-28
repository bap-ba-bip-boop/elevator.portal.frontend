import React from 'react';
import {ActionButton} from '../Action/ActionButton'

export const HistoryAmountButtons = ({changeAmount}) => {

  return (
    <>
        <ActionButton buttonFunction={changeAmount} name={10} functionArgs={10}/>
        <ActionButton buttonFunction={changeAmount} name={20} functionArgs={20}/>
        <ActionButton buttonFunction={changeAmount} name={50} functionArgs={50}/>
        <ActionButton buttonFunction={changeAmount} name={100} functionArgs={100}/>
    </>
  )
}
/*
<button onClick={() => setAmount(10)}>10</button>
<button onClick={() => setAmount(20)}>20</button>
<button onClick={() => setAmount(20)}>50</button>
<button onClick={() => setAmount(100)}>100</button>
*/