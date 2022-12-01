import React, { useState, useEffect, useRef } from 'react'
import { PartTasks } from '../../Components/Reports/PartTasks'
import { GetAllTechnicians } from '../../Services/technicianApiService.jsx'
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { postQuery } from '../../Services/query';


export const CreateErrorReport = () => {
    const { ElevatorId } = useParams();
    const [assignedTechnician, setTechnician] = useState('')
    const [rows, setRows] = useState(null)
    const [message, setMessage] = useState('')
    const [report, setReport] = useState([])
    const { isLoading, error, data: technicians } = useQuery({
        queryKey: ["employee"],
        queryFn: GetAllTechnicians
    });

//   useEffect(() => {
//    // POST TO CREATEREPORT

//     var requestOptionsPOST = {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify()
//     }
// s
//    fetch(`https://grupp5elevatorapidev.azurewebsites.net/api/createreport`, requestOptionsPOST)
//    .then(response => {
//      console.log(response);
//    });
//   }, [report])




    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const values = {
                Elevator: ElevatorId,
                IsDone: false,
                AssignedTechnician: assignedTechnician
            }

            var requestOptionsPOST = {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            }

            // api/ErrorReport
            fetch("https://grupp5elevatorapidev.azurewebsites.net/api/errorreport", requestOptionsPOST)
                .then(response => {
                    console.log(response)});
            // postQuery('/ErrorReport', requestOptionsPOST).then(res => { console.log(res) });

        } catch (err) {
            console.log(err);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error!</p>;
    }



    return (<>
        <h1> Create New Error Report</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label forhtml="assignedTechnician" className="col-sm-2 col-form-label">Assigned Technician</label>
                <div className="col-sm-10">
                    <select onChange={(e) => setTechnician(e.target.value)} value={assignedTechnician.id}>
                        <option>Choose Technician</option>
                        {
                            technicians?.map((assignedTechnician) => (
                                <option value={assignedTechnician.id} key={assignedTechnician.id}>{assignedTechnician.employeeName}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {/* <div>
             <div>
             <h2>
             Subject:
             </h2>
             <input value={text}></input>
             <p>{row.reportSubject}</p>
             </div>
             <h2>
             Comment:
             </h2>
             <p key={row.id}>{row.reportComment}</p>
             </div>
             <div>
             <label>
             Is done?
             <Checkbox onClick={() => ClickCheckBox(row)} key={row.id} checked={checkBoxisDone === true} />
             </label>
             </div> */}
            <br />
            <br/>
            <button type="submit">Submit</button>
        </form>
    </>)
}



const PartTaskItem = ({ row }) => {

    const ClickCheckBox = (row) => {
        console.log(row)

        const dataToSend = {
            isDone: false
        }


        var requestOptionsPOST = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)

        }

        fetch(`https://grupp5elevatorapidev.azurewebsites.net/api/errorreportrow/${row.id}`, requestOptionsPOST)
            .then(response => {
                    console.log(response);
                }
            )

    }


    return (

        <>
            <h1> Create New Error Report</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group row">
                    <label forhtml="assignedTechnician" className="col-sm-2 col-form-label">Assigned Technician</label>
                    <div className="col-sm-10">
                        <select onChange={(e) => setTechnician(e.target.value)} value={assignedTechnician.id}>
                            <option>Choose Technician</option>
                            {
                                technicians?.map((assignedTechnician) => (
                                    <option value={assignedTechnician.id} key={assignedTechnician.id}>{assignedTechnician.employeeName}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <>
                    <div key={row.id}>
                        <div>
                            <h2>
                                Subject:
                            </h2>
                            <p key={row.id}>{row.reportSubject}</p>
                        </div>
                        <h2>
                            Comment:
                        </h2>
                        <p key={row.id}>{row.reportComment}</p>
                    </div>
                    <div>
                        <label>
                            Is done?
                            <Checkbox onClick={() => ClickCheckBox(row)} key={row.id} checked={checkBoxisDone === true} />
                        </label>
                    </div>
                    <br />
                </>

                <br>
                </br>
                <button type="submit">Submit</button>

            </form></>


    )


}