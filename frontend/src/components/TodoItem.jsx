export default function TodoItem({ task, onDelete }) {
  return (
    <div className="flex justify-between items-center p-3 bg-base-200 rounded">
      <span className={task.completed ? "line-through" : ""}>
        {task.title}
      </span>

      <button
        className="btn btn-sm btn-error"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}