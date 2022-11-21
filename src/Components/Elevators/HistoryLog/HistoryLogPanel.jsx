import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from 'react'
import { getLogs } from '../../../Services/elevatorLogServices';
import {ActionButton} from '../ActionButton';
import { HistoryAmountButtons } from './HistoryAmountButtons';


export const HistoryLogPanel = ({Elevator}) => {

    console.log(Elevator)
    const {id} = Elevator;

    const [page, setPage] = useState( () => 1 );
    const [amount, setAmount] = useState( () => 10 );
    const [logList, setLogList] = useState( () => [] );

    useEffect(
        () => {
            getLogs(id, amount, page).then( result => {
                let values = [];
                for(var element of result)
                {
                    var t = new Date(element.timeStamp)
                    values.push(
                    {
                        "id": `${element.elevatorId} ${element.timeStamp}`,
                        "timeStamp": `${t.getFullYear()}/${t.getMonth()}/${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`,
                        "eventType": element.eventType, logDescription: element.logDescription
                    }
                    );
                }
                setLogList( logList.concat(values) ); 
            });
            },
        [page]
    );

    const changeAmount = (newAmount) =>
    {
        if(amount !== newAmount){
            setAmount(newAmount)
            setLogList([]);
            setPage(1);
        }
    }

    const nextPage = () =>
    {
        setPage( page + 1 );
    }

    const columns = [
        {field: "id", headerName: "Id", flex: 2},
        {field: "timeStamp", headerName: "Timestamp", flex: 1},
        {field: "eventType", headerName: "Event Type", flex: 1},
        {field: "logDescription", headerName: "Description", flex: 2}
    ];

  return (
    <>
    <HistoryAmountButtons changeAmount={changeAmount}/>
        <DataGrid 
            rows = {logList}
            columns={columns} 
            autoHeight={true}
            hideFooter={true}
            />
        <ActionButton name={"Get More"} buttonFunction={nextPage}/>
    </>
  )
}
