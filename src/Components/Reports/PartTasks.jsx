import React from 'react'
import { PartTask } from './PartTask'

export const PartTasks = ({PartTasks, toggleTask, onToggle}) => {
  return (
    <div>
        {tasks.map(task => <PartTask key = {task.id} task = {task} toggleTask = {toggleTask} onToggle = {onToggle}/>)}
    </div>
  ) 
}
