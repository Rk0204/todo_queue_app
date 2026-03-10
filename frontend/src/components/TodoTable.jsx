export default function TodoTable({ tasks, onDelete, searchText }) {

  if (!tasks.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No tasks found
      </div>
    );
  }

const highlightText = (text, highlight) => {
  if (!highlight || highlight.trim() === "") return text;

  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const parts = text.split(new RegExp(`(${escapedHighlight})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span
        key={index}
        className="bg-yellow-300 font-bold px-1 rounded"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

  return (
    <div class="min-h-screen bg-base-200 p-8">
  <div class="w-full bg-base-100 shadow-xl rounded-xl p-8">

      <table className="table table-zebra w-full">

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>

          {tasks.map((task) => (
            <tr key={task.id}>

              <td>{task.id}</td>

              <td className="max-w-xl truncate">
                {highlightText(task.title, searchText)}
              </td>

              <td>
                {task.completed ? (
                  <span className="badge badge-success">
                    Completed
                  </span>
                ) : (
                  <span className="badge badge-warning">
                    Pending
                  </span>
                )}
              </td>

              <td className="text-center">
                <button
                  className="btn btn-error px-6"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
    </div>
  );
}