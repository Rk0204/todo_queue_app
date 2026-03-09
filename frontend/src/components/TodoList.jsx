import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDelete }) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}