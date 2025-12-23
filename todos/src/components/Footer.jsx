import React from 'react'
import { useTodo } from '../context/TodoContext'

const Footer = () => {
    const {todos, clearCompleted} = useTodo();
    const activeCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className='flex justify-between items-center mt-8 border rounded-lg p-4 text-sm'>
        <span>{completedCount} completed</span>
        <button onClick={clearCompleted}
        className='bg-red-500  text-white hover:bg-red-700 rounded-lg px-4 py-2'>
            Clear Completed
        </button>
    </div>
  );
};

export default Footer