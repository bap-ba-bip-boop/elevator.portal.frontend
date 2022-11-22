import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from 'react'
import { getLogs } from '../../../Services/elevatorLogServices';
import {ActionButton} from '../Action/ActionButton'
import { HistoryAmountButtons } from './HistoryAmountButtons';


export const HistoryLogPanel = ({Elevator}) => {

    const {id} = Elevator;

    const [values, setValues] = useState( {} );
    
    useEffect(
        ()=>{
            setValues({page: 1, amount: 10, logList: [] });
        },[]
        );

    useEffect(
        ()=>{
            console.log("values: ", values);
            console.log("Amount of keys: ", Object.keys(values).length);
            if(Object.keys(values).length !== 0)
            {
                updateTable();
            }
            
        },[values.page, values.amount]
    );

    const updateTable = () => {
        console.log("updating table...");
            getLogs(id, values.amount, values.page).then( result => {
                let items = [];
                for(var element of result)
                {
                    var t = new Date(element.timeStamp)
                    items.push(
                    {
                        "id": `${element.elevatorId} ${element.timeStamp}`,
                        "timeStamp": `${t.getFullYear()}/${t.getMonth()}/${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`,
                        "eventType": element.eventType, logDescription: element.logDescription
                    }
                    );
                }
                console.log("items: ", items)
                //setLogList( logList.concat(values) ); 
                setValues(
                    {
                        ...values,
                        logList: values.logList.concat(items)
                    }
                );
            });
    }

    const changeAmount = (newAmount) =>
    {
        console.log(newAmount);

        setValues({
            amount: newAmount,
            logList: [],
            page: 1
        });
    }

    const nextPage = () =>
    {
        console.log(values.page + 1);
        setValues({
            ...values,
            page: values.page + 1
        });
    }

    const columns = [
        {field: "id", headerName: "Id", flex: 3},
        {field: "timeStamp", headerName: "Timestamp", flex: 1},
        {field: "eventType", headerName: "Event Type", flex: 1},
        {field: "logDescription", headerName: "Description", flex: 1}
    ];

  return (
    <>
    <HistoryAmountButtons changeAmount={changeAmount}/>
       {values.logList && <DataGrid 
            rows = {values.logList}
            columns={columns} 
            autoHeight={true}
            hideFooter={true}
            />
       }<ActionButton name={"Get More"} buttonFunction={nextPage}/>
    </>
  )
}
