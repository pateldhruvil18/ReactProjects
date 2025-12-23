import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: false
        }
    ],
        addTodo : (todo) => {},
        updateTodo :(id, todo) => {},
        deleteTodo : (id) => {},
        ToggleComplete : (id) => {}
    
})

export const useTodo = () => {
    return useContext(TodoContext)
}
export const Todoprovider = TodoContext.Provider