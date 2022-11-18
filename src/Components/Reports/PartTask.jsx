import React from 'react'

export const PartTask = ({task, toggleTask, onToggle}) => {

    function handleToggleTask(){
        toggleTask(task.id)
    }
  return (
    <div className='task-component'>
        <input type = 'checkbox' checked = {task.complete} onChange = {handleToggleTask} onDoubleClick = {onToggle}/>
        {task.name}
    </div>
  )
}

