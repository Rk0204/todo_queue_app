import { useEffect, useState } from "react";
import { fetchTasks, deleteTask } from "./api";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch {
      setError("Failed to load tasks");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);

      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch {
      setError("Failed to delete task");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center p-10">
      <div className="card w-full max-w-xl bg-base-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Todo Queue App</h1>

        {error && (
          <div className="alert alert-error mb-3">{error}</div>
        )}

        <TodoList tasks={tasks} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;