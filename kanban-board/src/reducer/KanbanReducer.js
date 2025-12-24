export const initialState = {
  todo: [],
  inProgress: [],
  done: [],
};

export const KanbanReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TASK":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case "MOVE_TASK": {
      const { from, to, task } = action.payload;

      // 🛡️ Defensive check (VERY IMPORTANT)
      if (!state[from] || !state[to]) {
        console.error("Invalid MOVE_TASK:", from, to);
        return state;
      }

      return {
        ...state,
        [from]: state[from].filter(t => t.id !== task.id),
        [to]: [...state[to], task],
      };
    }

    case "DELETE_TASK": {
      const { column, id } = action.payload;

      if (!state[column]) {
        console.error("Invalid DELETE_TASK:", column);
        return state;
      }

      return {
        ...state,
        [column]: state[column].filter(t => t.id !== id),
      };
    }

    default:
      return state;
  }
};
