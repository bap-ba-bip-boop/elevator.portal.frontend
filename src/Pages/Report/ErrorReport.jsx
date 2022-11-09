import React from 'react'
import { useState, useEffect } from 'react'
import { getData } from '../../Data/JSONData'

import errorReportViewData from './ErrorReportSettingsData.json'

export const ErrorReport = ({FormData}) => {

const [errorReport, setErrorReport] = useState(() => null);


const [status, setStatus] = useState('')
const [assignedTechnician, setAssignedTechnician] = useState('')
const [comment, setComment] = useState('')
const [partTask, setPartTask] = useState('')

const onChange = event => setValue(event.target.value);

const setSelectedPage = "";



let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(errorReportViewData, {
        method: "POST",
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
        setAssignedTechnician("Technician assigned");
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
                      <option value="outoforder">Out Of Order</option>
                      <option value="undercontruction">Under Contruction</option>
                      <option value="functioning">Functioning</option>
                  </select>
              </div>
          </div>
          <div class="form-group row">
              <label for="assignedTechnician" class="col-sm-2 col-form-label">Assigned Technician</label>
              <div class="col-sm-10">
                  <select value={assignedTechnician} onChange={onChange}>
                      <option value="roger">Roger</option>
                      <option value="pontare">Pontare</option>
                      <option value="vindarnaviskar">Vindarna Viskar</option>
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

