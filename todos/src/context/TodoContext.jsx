import { createContext, useContext, useState, useEffect } from "react";
import { nanoid } from 'nanoid'


const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];
    });

    const [filter, setFilter] = useState("all");

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
    const addTodo = (text) => {
        setTodos([...todos, {id:nanoid(), text, completed: false}])
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo));
    };

    const editTodo = (id, newText) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, text : newText} : todo));
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const filteredTodos = todos.filter(todo => {
        if(filter === "active") return !todo.completed;
        if(filter === "completed") return todo.completed;
        return true;
    })

    return (
        <TodoContext.Provider value=
        {{
            todos, 
            addTodo, 
            deleteTodo, 
            toggleTodo,
            editTodo,
            clearCompleted,
            filteredTodos,
            filter,
            setFilter
        }}>
            {children}
        </TodoContext.Provider>
    );
}