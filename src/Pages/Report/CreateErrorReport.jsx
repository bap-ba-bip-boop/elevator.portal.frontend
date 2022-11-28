import React, { useState, useEffect, useRef } from 'react'
import { PartTasks } from '../../Components/Reports/PartTasks'
import  { GetAllTechnicians } from '../../Services/technicianApiService.jsx'
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { postQuery } from '../../Services/query';


export const CreateErrorReport = () => {

const {ElevatorId} = useParams();
const [assignedTechnician, setTechnician] = useState('')
const [reportRows, setReportRows] = useState('')
const [message, setMessage] = useState('')

const { isLoading, error, data: technicians } = useQuery({ queryKey: ["employee"], 
  queryFn: GetAllTechnicians });


// const { data : errorReportRows } = useQuery({ queryKey: ["ErrorReport"]})




const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const values = {
        Elevator : ElevatorId,
        IsDone : false,
        AssignedTechnician: assignedTechnician
        
     }
     console.log(values)
     postQuery('/ErrorReport', values).then(res => {console.log(res)});
      
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


  return (
    
    <><>
    <h1> Create New Error Report</h1>
    <form onSubmit={handleSubmit}>
          
          <div className="form-group row">
              <label forhtml="assignedTechnician" className="col-sm-2 col-form-label">Assigned Technician</label>
              <div className="col-sm-10">
                  <select onChange={(e) => setTechnician(e.target.value) } value={assignedTechnician.id}>
                    <option>Choose Technician</option>
                        {
                            technicians?.map((assignedTechnician) => (
                              <option value={assignedTechnician.id} key={assignedTechnician.id}>{assignedTechnician.employeeName}</option>
                            ))
                        }
                  </select>
              </div>
          </div>
          <div className="form-group row">
              <label forhtml="reportRows" className="col-sm-2 col-form-label">Add a Task</label>
              <div className="col-sm-10">
                  <select onChange={(e) => setReportRows(e.target.value) } value={errorReportId}>
                        {
                            reportRows?.map((errorReportRows) => (
                              <option value={errorReportRows.id} key={errorReportRows.id}>{errorReportRows.IsDone}</option>
                            ))
                        }
                  </select>
              </div>
          </div>
          
          <br>
          </br>
        <button type="submit">Submit</button>
          
      </form></>
      
      </>
  )
}

