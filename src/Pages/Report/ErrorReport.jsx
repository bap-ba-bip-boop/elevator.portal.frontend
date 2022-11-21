import React from 'react'
import { useState, useEffect } from 'react'
// import { Comment } from '../../Reports/Comment'
import { QueryClient, useMutation } from 'react-query'
import { json } from 'react-router-dom'
import { PartTasks } from '../../Components/Reports/PartTasks'


export const ErrorReport = ({ErrorReport}) => {


const {ElevatorId} = useParams();

const [status, setStatus] = useState('')
const [assignedTechnician, setAssignedTechnician] = useState('')
const [comment, setComment] = useState('')
const [partTask, setPartTask] = useState('')
const tasksRef = useRef()

const onChange = event => setValue(event.target.value);


function ErrorReport() {
  
  const { data: assignedTechnician} = useQuery('assignedTechnician', getTechnician)
  const { data, error, isLoading} = useQuery({
    queryKey: ['errorReport'],
    queryFn: () =>
      fetch('https://grupp5elevatorapidev.azurewebsites.net/api/ErrorReport').then(res =>
        res.json())
  });
}

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message


useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(storedTasks) storedTasks(storedTasks)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
}, [tasks])


function addTasks(){
  let taskName = tasksRef.current.value
  let id = Math.floor(Math.random()*10000)
  if(taskName === '') return alert ('Please Add a Task')

  SetTasks(prevTodos => {
    return [...tasks, {id:id, name:taskName, complete:false}]
  })
  tasksRef.current.value = null
}

function toggleTask(id){
  const newTasks = [...tasks]
  const task = newTasks.find(task => task.id === id)
  task.complete = !task.complete
  setTasks(newTasks)
}

function removeTasks() {
  const newTasks = tasks.filter(task => !task.complete)
  setTasks(newTasks)
}
function removeAllTasks() {
  setTasks([])
}

function clearStorage(){
  localStorage.clear()
  alert('Storage has been cleared, refresh page to see results')
}


let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('https://localhost:7174/api/ErrorReport', {
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
                  <select onChange={onChange}>
                      <option value={isDone}>Done</option>
                      <option value={isDone}>Not Done</option>
                  </select>
              </div>
          </div>
          <div class="form-group row">
              <label for="assignedTechnician" class="col-sm-2 col-form-label">Assigned Technician</label>
              <div class="col-sm-10">
                  <select onChange={e => setTechnician(e.target.value)}>
                    <option selected disabled value={-1}>Choose Technician</option>
                        {
                            data.map((assignedTechnician) => (
                              <li key={assignedTechnician.id}>{assignedTechnician.make}</li>
                            ))
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
      <div class="container">
        <h1 className='part-tasks'>Part Tasks</h1>    
        {
          tasks.length == 0 ? '': <h1 className='total-tasks'>{tasks.filter(task => !task.complete).length} left to do</h1>
        }   

        <input className='input-field' ref = {tasksRef} placeholder = 'Add Task..'/>
          <button onClick={addTasks} text='Add Task' /> 
          <button onClick={removeTasks} text='Remove Task' />   
          <button onClick={removeAllTasks} text='Remove All Tasks' />   
          <button onClick={clearStorage} text='Clear Storage' />  
          {tasks.length > 0 ? <PartTasks tasks={tasks} toggleTask = {toggleTask} /> : 'No tasks to show'}                 
      </div></>
  )
}

