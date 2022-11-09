import React from 'react'
import '../../Style/ElevatorIndexPanel.css'
import { Link } from "react-router-dom";
import ActionPanel from './ActionPanel';
import { useEffect } from 'react';

export const Panel = ({Elevator, DaysLeft}) => {

    useEffect(() => {
        return () => {
            console.log(Elevator);
        };
    }, []);

    const {errorReport, buildingId, buildingName, Name, deadline} = Elevator;


    const setBackground = (timeLeft) => {
        if (ErrorStatus === "Ok") {
            return {};
        }
        if (timeLeft > 7) {
            return {};
        } else if (timeLeft > 3) {
            return {
                backgroundColor: "yellow"
            };
        } else {
            return {
                backgroundColor: 'red'
            };
        }
    };

    return (
      <div className='ElevatorIndexPanelContainer'>
        <ActionPanel Elevator={Elevator}/>
      </div>
    )
}