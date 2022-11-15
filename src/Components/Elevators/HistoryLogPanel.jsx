import React, {useEffect, useState} from 'react'
import { getLogs } from '../../Services/elevatorLogServices';

export const HistoryLogPanel = ({Elevator}) => {

    const {id} = Elevator;

    const [page, setPage] = useState( () => 1 );
    const [amount, setAmount] = useState( () => 10 );
    const [logList, setLogList] = useState( () => [] );

    useEffect(
        () => {
            console.log("Page useEffect Triggered");
            getLogs(id, amount, page).then( result => { setLogList( logList.concat(result) ); } );
        },
        [page]
    );

  return (
    <>
        {
            logList.map(log => <p key={`${log.elevatorId} ${log.timeStamp}`}>{log.timeStamp}</p>)
        }
    </>
  )
}
