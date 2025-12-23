import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from '../features/tasks/taskSlice';
import './task.css';

const TaskItem = ({task}) => {
    const dispatch = useDispatch();
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      {task.text}
      <button onClick={() => dispatch(toggleTask(task.id))} className='button'>{task.completed ? "Undo" : "Done"}</button>
      <button onClick={() => dispatch(deleteTask(task.id))} className='button delete'>Delete</button>
    </li>

  )
}

export default TaskItem