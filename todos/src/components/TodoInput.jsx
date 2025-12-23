import React,{useState} from 'react'
import { useTodo } from '../context/TodoContext';

const TodoInput = () => {
    const [text, setText] = useState("");

    const {addTodo} = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;
        addTodo(text);
        setText(" ");
    }


  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
        <input 
          type="text"
          className='border p-2 rounded w-full'
          placeholder='Add a todo..'
          value={text}
          onChange={(e)=> setText(e.target.value)} 
          required
        />
        <button className='bg-blue-500 text-white px-4 rounded'>
            Add
        </button>
    </form>
  )
}

export default TodoInput