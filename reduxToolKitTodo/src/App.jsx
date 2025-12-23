import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <>
      <div className='items-center'>
        <h1 className='items-center text-3xl text-white '>Learn Redux</h1>
      <AddTodo/>
      <Todos/>

      </div>
      
    </>
  )
}

export default App