import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div className='text-2xl text-white mt-3 items-center '>Todos</div>
        {todos.map((todo) => (
            <li 
                className='mt-4 flex justify-between text-white
                items-center bg-zinc-800 px-4 py-2 rounded mx-auto'
                key={todo.id}>
                {todo.text}
                <button 
                  className='bg-red-500 rounded-md px-2 py-2 hover:bg-red-800 focus:ring-white text-white'
                  onClick={() => dispatch(removeTodo(todo.id))}
                >remove</button>
            </li>
        ))}
    </>
  )
}

export default Todos