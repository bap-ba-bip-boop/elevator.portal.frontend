import React from 'react'
import { useState, useEffect } from 'react'

export const ErrorReport = ({ErrorReportId}) => {

const [errorReport, setErrorReport] = useState(() => null);


const [status, setStatus] = useState('')
const [assignedTechnician, setAssignedTechnician] = useState('')
const [comment, setComment] = useState('')
const [partTask, setPartTask] = useState('')

const onChange = event => setValue(event.target.value);

const setSelectedPage = "";


useEffect( () => {
    GetErrorReportById(ErrorReportId)
    .then(
        result => {
            setErrorReport(result);
        }
    );
},
[]
);

useEffect( () => {
    getData(
        `${employeeViewData.apiEmployeeViewUrl}/${EmployeeId}`,
        employeeViewData.apiEmployeeViewMethod,
        employeeViewData.apiEmployeeViewHeaders
    )
    .then(
        result => {
            setEmployee(result);
        }
    );
},
[]
);


let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(errorReportViewData, {
        method: "POST",
        header: errorReportViewData.errorReportMethodHeaders,
        body: JSON.stringify({
          status: status,
          assignedTechnician: assignedTechnician,
          comment: comment,
          partTask: partTask
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setStatus("Status Updated");
        setAssignedTechnician(assignedTechnician);
        setComment("");
        setPartTask("")
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <><><form onSubmit={handleSubmit}>
          <div class="form-group row">
              <label for="status" class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-10">
                  <select value={status} onChange={onChange}>
                      <option value={isDone}>Out Of Order</option>
                      <option value={isDone}>Under Contruction</option>
                      <option value={isDone}>Functioning</option>
                  </select>
              </div>
          </div>
          <div class="form-group row">
              <label for="assignedTechnician" class="col-sm-2 col-form-label">Assigned Technician</label>
              <div class="col-sm-10">
                  <select onChange={e => setTechnician(e.target.value)}>
                    <option selected disabled value={-1}>Choose Technician</option>
                        {
                            assignedTechnicians.map(assignedTechnician => <option key={assignedTechnician.Id} 
                            value={assignedTechnician.Id}>{assignedTechnician.Name}</option>)
                        }
                  </select>
              </div>
          </div>
          <div class="form-group row">
              <label for="comments" class="col-sm-2 col-form-label">Comment</label>
              <div class="col-sm-10">
                  <textarea value={comment} onChange={onChange} />
              </div>
          </div>
          <button type="submit">Send Comment</button>
          <br>
          </br>
          
      </form></>
      <div class="partTask">
            <h2>Part Tasks</h2>
            <div class="item">
                <p>Deluppgift 1</p>
                <input type="checkbox" />
            </div>
            <div class="item">
                <p>Deluppgift 2</p>
                <input type="checkbox" />
            </div>
            <div class="item">
                <p>Deluppgift 3</p>
                <input type="checkbox" />
            </div>
            <div class="item">
                <p>Deluppgift 4</p>
                <input type="checkbox" />
            </div>
            <button type="submit" >Submit</button>
        </div></>
  )
}

