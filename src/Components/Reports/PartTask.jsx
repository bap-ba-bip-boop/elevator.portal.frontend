import React from 'react'

export const PartTask = ({task, toggleTask, OnToggle}) => {

    function handleToggleTask(){
        toggleTask(task.id)
    }
  return (
    <div className='task-component'>
        <input type = 'checkbox' checked = {task.complete} onChange = {handleToggleTask} onDoubleClick = {ontoggle}/>
    </div>
  )
}

