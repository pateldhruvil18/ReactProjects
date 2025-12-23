import React from 'react'
import { useTodo } from '../context/TodoContext'
import TodoItem from './TodoItem'
import Footer from './Footer'

export const TodoList = () => {
    const { filteredTodos, filter } = useTodo();

    return (
        <>
            <ul className='space-y-2'>
                {filteredTodos.length === 0 && (
                    <p className='text-center text-gray-400'>No Todos yet</p>
                )}

                {filteredTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>

            {filter === "completed" && <Footer />}
        </>
    )
}
