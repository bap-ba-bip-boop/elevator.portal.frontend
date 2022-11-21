import React from 'react';
import {ActionButton} from '../ActionButton';

export const HistoryAmountButtons = ({changeAmount}) => {

    const setAmount = (amount) =>
    {
        changeAmount(amount)
    }

  return (
    <>
        <ActionButton name={10} buttonFunction={setAmount(10)} />
        <ActionButton name={20} buttonFunction={setAmount(20)} />
        <ActionButton name={50} buttonFunction={setAmount(50)} />
        <ActionButton name={100} buttonFunction={setAmount(100)} />
    </>
  )
}
