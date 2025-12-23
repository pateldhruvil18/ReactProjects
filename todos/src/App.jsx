import React from 'react'
import TodoInput from './components/TodoInput'
import { TodoList } from './components/TodoList'
import Filter from './components/Filter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-300 flex  justify-center'>
      <div className='bg-white w-full m-15 p-6 rounded-xl shadow-md'>
        <h1 className='text-2xl font-bold text-center mb-3'>Todo App</h1>
        <TodoInput/>
        <Filter/>
        <TodoList/>
      </div>
    </div>
  )
}

export default App