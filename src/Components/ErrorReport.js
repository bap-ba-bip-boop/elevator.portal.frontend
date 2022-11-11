import React from 'react'
import { useState } from 'react'
import './ErrorReport.css';

const ErrorReport = ({FormData}) => {


const [status, setStatus] = useState('')
const [assignedTechnician, setAssignedTechnician] = useState('')
const [comment, setComment] = useState('')
const [partTask, setPartTask] = useState('')

const onChange = event => setValue(event.target.value);

const AddFormData = (e) => {
    e.preventDefault() 
FormData({status, assignedTechnician, comment, partTask})

}
  return (
    <><><form onSubmit={AddFormData}>
          <div class="form-group row">
              <label for="status" class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-10">
                  <select value={status} id={id} onChange={onChange}>
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
                  <textarea value={comments} onChange={onChange} />
              </div>
          </div>
          <button type="submit">Send Comment</button>
          <br>
          </br>
          <button type="submit">Submit</button>
      </form></>
      <div class="inbox">
              <div class="item">
                  <input type="checkbox" />
                  <p>Deluppgift 1</p>
              </div>
              <div class="item">
                  <input type="checkbox" />
                  <p>Deluppgift 2</p>
              </div>
              <div class="item">
                  <input type="checkbox" />
                  <p>Deluppgift 3</p>
              </div>
              <div class="item">
                  <input type="checkbox" />
                  <p>Deluppgift 4</p>
              </div>

          </div></>
  )
}

export default ErrorReport