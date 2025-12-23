import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (!text.trim()) return;
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 p-2 rounded">
      <div className="flex items-center gap-3 flex-1">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 accent-green-500 cursor-pointer"
        />

        {isEditing ? (
          <input
            className="border p-1 w-full rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
        ) : (
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer select-none ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-white rounded-lg px-2 py-1 bg-green-400 hover:bg-green-600"
          >
            ✔
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-white rounded-lg px-2 py-1 bg-blue-400 hover:bg-blue-600"
          >
            ✏
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-white rounded-lg px-3 py-1 bg-red-400 hover:bg-red-600"
        >
          ✕
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
