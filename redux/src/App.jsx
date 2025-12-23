import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='items-center'>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App