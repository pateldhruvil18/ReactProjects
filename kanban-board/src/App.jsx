import { KanbanProvider } from "./context/KanbanContext";
import Board from "./components/Board";

const App = () => {
  return (
    <KanbanProvider>
      <div className="min-h-screen bg-slate-900 text-white">
        <h1 className="text-3xl font-bold text-center py-6">
          Kanban Board
        </h1>
        <Board />
      </div>
    </KanbanProvider>
  );
};

export default App;
