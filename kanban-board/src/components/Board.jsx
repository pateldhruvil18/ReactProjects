import Column from "./Column";

const Board = () => {
  return (
    <div className="flex gap-6 px-6 pb-10">
      <Column title="Todo" columnKey="todo" />
      <Column title="In Progress" columnKey="inProgress" />
      <Column title="Done" columnKey="done" />
    </div>
  );
};

export default Board;
