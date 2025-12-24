import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, KanbanReducer } from "../reducer/KanbanReducer";

const KanbanContext = createContext();

export const KanbanProvider = ({children}) => {
    const [state, dispatch] = useReducer(
        KanbanReducer,
        initialState,
        () => {
            const saved = localStorage.getItem("kanban")
            return saved ? JSON.parse(saved) : initialState;
        }
    );

    useEffect(() => {
      localStorage.setItem("kanban", JSON.stringify(state));
    }, [state]);

    return(
        <KanbanContext.Provider value={{state, dispatch}}>
            {children}
        </KanbanContext.Provider>
    ) 
};

export const useKanban = () => useContext(KanbanContext);