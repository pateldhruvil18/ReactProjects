import { useState, useRef, useEffect } from "react";
import { useKanban } from "../context/KanbanContext";
import Card from "./Card";

const Column = ({ title, columnKey }) => {
  const { state, dispatch } = useKanban();
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput) inputRef.current?.focus();
  }, [showInput]);

  const addTask = () => {
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: { id: crypto.randomUUID(), text },
    });

    setText("");
    setShowInput(false);
  };

  return (
    <div className="bg-slate-800 rounded-lg p-4 w-full">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      {columnKey === "todo" && (
        <>
          {!showInput && (
            <button
              onClick={() => setShowInput(true)}
              className="mb-4 px-3 py-1 text-sm bg-blue-600 rounded"
            >
              + Add Task
            </button>
          )}

          {showInput && (
            <div className="mb-4 animate-fade-in">
              <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
                placeholder="Enter task..."
                className="w-full mb-2 px-3 py-2 rounded bg-slate-700"
              />

              <div className="flex gap-2">
                <button onClick={addTask} className="bg-blue-600 px-3 py-1 rounded">
                  Add
                </button>
                <button
                  onClick={() => {
                    setShowInput(false);
                    setText("");
                  }}
                  className="bg-slate-600 px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}

      <div
        className="space-y-3 min-h-[50px]"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const data = JSON.parse(e.dataTransfer.getData("text/plain"));
          dispatch({
            type: "MOVE_TASK",
            payload: { from: data.from, to: columnKey, task: data.task },
          });
        }}
      >
        {(state[columnKey] || []).map(task => (
          <Card key={task.id} task={task} columnKey={columnKey} />
        ))}
      </div>
    </div>
  );
};

export default Column;
