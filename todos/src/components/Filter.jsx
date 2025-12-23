import React from 'react'
import { useTodo } from '../context/TodoContext'

const Filter = () => {
    const { filter , setFilter} = useTodo ();

    const btn = (type) => 
        `px-3 py-1 rounded cursor-pointer transition-all  duration-200 ${
            filter === type ? "bg-blue-500 hover:underline text-white" : "bg-gary-200"
        }`;
  return (
    <div className='flex justify-center gap-2 my-3 '>
        <button onClick={() => setFilter("all")} className={btn("all")}>All</button>
        <button onClick={() => setFilter("active")} className={btn("active")}>Active</button>
        <button onClick={() => setFilter("completed")} className={btn("completed")}>Completed</button>
    </div>
  );
};

export default Filter