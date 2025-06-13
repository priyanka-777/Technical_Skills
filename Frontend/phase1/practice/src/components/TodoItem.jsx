function TodoItem({ text, onDelete }) {
  return (
    <div className="todo-item">
      <span>{text}</span>
      <button onClick={onDelete}>❌</button>
    </div>
  );
}

export default TodoItem;
