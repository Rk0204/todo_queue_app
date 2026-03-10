import { useEffect, useState } from "react";
import { fetchTasks, deleteTask } from "./api";
import TodoTable from "./components/TodoTable";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
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
      setError("Delete failed");
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-200 flex justify-center p-8">

      <div class="w-full bg-base-100 shadow-xl rounded-xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Task Manager Dashboard
          </h1>

          <div className="badge badge-primary badge-lg">
            Total Tasks: {tasks.length}
          </div>
        </div>

        {error && (
          <div className="alert alert-error mb-4">
            {error}
          </div>
        )}

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            className="input input-bordered w-full max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <TodoTable tasks={filteredTasks} onDelete={handleDelete} searchText={search} />

      </div>
    </div>
  );
}

export default App;