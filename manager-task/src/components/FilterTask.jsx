import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../features/tasks/taskSlice';
import './task.css';

const FilterTask = () => {
    const filter = useSelector(state => state.tasks.filters)
    const dispatch = useDispatch();
  return (
    <div className='filter'>
        <button 
           onClick={() => dispatch(setFilter('all'))}
           className={`button ${filter === 'all' ? 'active' : ''}`}
        >
            All
        </button>
        <button 
           onClick={() => dispatch(setFilter('completed'))}
           className={`button ${filter === 'completed' ? 'active' : ''}`}
        >
            Completed
        </button>
    </div>
  )
}

export default FilterTask