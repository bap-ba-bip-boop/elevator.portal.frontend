import React, { useState, useEffect, useRef } from 'react'
import { PartTasks } from '../../Components/Reports/PartTasks'
import  { GetAllTechnicians } from '../../Services/technicianApiService.jsx'
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { postQuery } from '../../Services/query';


// const LOCAL_STORAGE_KEY = 'elevatorTasks';

export const CreateErrorReport = () => {

const {ElevatorId} = useParams();
const [assignedTechnician, setTechnician] = useState('')
// const [tasks, setTasks] = useState('')
// const tasksRef = useRef()
const [message, setMessage] = useState('')


// const onChange = event => setValue(event.target.value);


const { isLoading, error, data: technicians } = useQuery({ queryKey: ["employee"], 
  queryFn: GetAllTechnicians });




//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     if(storedTasks) storedTasks(storedTasks)
//   }, [])
  
//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
//   }, [tasks])


// function addTasks(){
//   let taskName = tasksRef.current.value
//   let id = Math.floor(Math.random()*10000)
//   if(taskName === '') return alert ('Please Add a Task')

//   setTasks(prevTodos => {
//     return [...tasks, {id:id, name:taskName, complete:false}]
//   })
//   tasksRef.current.value = null
// }

// function toggleTask(id){
//   const newTasks = [...tasks]
//   const task = newTasks.find(task => task.id === id)
//   task.complete = !task.complete
//   setTasks(newTasks)
// }

// function removeTasks() {
//   const newTasks = tasks.filter(task => !task.complete)
//   setTasks(newTasks)
// }
// function removeAllTasks() {
//   setTasks([])
// }

// function clearStorage(){
//   localStorage.clear()
//   alert('Storage has been cleared, refresh page to see results')
// }


const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const values = {
        Elevator : ElevatorId,
        IsDone : false,
        AssignedTechnician: assignedTechnician
        
     }
     console.log(values)
     postQuery('/ErrorReport', values).then(res => console.log(res));
      // let res = await fetch('https://grupp5elevatorapidev.azurewebsites.net/api/ErrorReport', {
      //   method: 'POST',
      //   mode : 'cors',
      //   header: {
      //     'Content-Type' : 'application/json'
      //   },
      //   body: JSON.stringify({
      //      Elevator : ElevatorId,
      //      IsDone : isDone,
      //      AssignedTechnician: assignedTechnician
          
      //   }),
      // });
      // // let resJson = await res.json();
      // if (res.status === 200) {
      //   setStatus("Status Updated");
      //   setTechnician("");
      //   // setComment("");
      //   // setTasks("")
      // } else {
      //   setMessage("Some error occured");
      // }
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
          
          <br>
          </br>
        <button type="submit">Submit</button>
          
      </form></>
      {/* <div className="container">
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
      </div> */}
      </>
  )
}

