import { useKanban } from "../context/KanbanContext";

const Card = ({ task, columnKey }) => {
  const { dispatch } = useKanban();

  const move = (to) => {
    dispatch({
      type: "MOVE_TASK",
      payload: { from: columnKey, to, task },
    });
  };

  return (
    <div
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData(
          "text/plain",
          JSON.stringify({ task, from: columnKey })
        )
      }
      className="bg-slate-700 p-3 rounded-md cursor-move hover:scale-[1.02] transition"
    >
      <p className="text-sm">{task.text}</p>

      <div className="flex gap-2 mt-3">
        {columnKey === "inProgress" && (
          <button onClick={() => move("todo")} className="text-xs bg-slate-600 px-2 rounded">←</button>
        )}
        {columnKey === "todo" && (
          <button onClick={() => move("inProgress")} className="text-xs bg-slate-600 px-2 rounded">→</button>
        )}
        {columnKey === "done" && (
          <button onClick={() => move("inProgress")} className="text-xs bg-slate-600 px-2 rounded">←</button>
        )}
        {columnKey === "inProgress" && (
          <button onClick={() => move("done")} className="text-xs bg-slate-600 px-2 rounded">→</button>
        )}

        <button
          onClick={() =>
            dispatch({
              type: "DELETE_TASK",
              payload: { column: columnKey, id: task.id },
            })
          }
          className="ml-auto text-xs bg-red-600 px-2 rounded"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Card;
