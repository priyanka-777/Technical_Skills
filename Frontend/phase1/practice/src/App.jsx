/* import { useState } from 'react'
import './styles/App.scss';

function App() {

  return (
    <div className="container">
      <h1>Hello world</h1>
    
    </div>
  )
}

export default App */ 


import { useState } from 'react';
import TodoItem from './components/TodoItem';
import './styles/App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((item, idx) => (
          <TodoItem key={idx} text={item} onDelete={() => deleteTodo(idx)} />
        ))}
      </div>
    </div>
  );
}

export default App;

