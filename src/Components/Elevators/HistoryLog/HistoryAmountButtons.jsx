import React from 'react';
import { ActionButton } from '../ActionButton';

export const HistoryAmountButtons = ({changeAmount}) => {

    const setAmount = (amount) =>
    {
        changeAmount(amount)
    }

  return (
    <>
        <ActionButton buttonFunction={setAmount} name={10} functionArgs={10}/>
        <ActionButton buttonFunction={setAmount} name={20} functionArgs={20}/>
        <ActionButton buttonFunction={setAmount} name={50} functionArgs={50}/>
        <ActionButton buttonFunction={setAmount} name={100} functionArgs={100}/>
    </>
  )
}
/*
<button onClick={() => setAmount(10)}>10</button>
<button onClick={() => setAmount(20)}>20</button>
<button onClick={() => setAmount(20)}>50</button>
<button onClick={() => setAmount(100)}>100</button>
*/