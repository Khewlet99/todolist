import { useState } from 'react';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="center">
        <div className="task-input-container">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="task-input"
          />
          <button onClick={addTodo} className="task-button">
            Add
          </button>
        </div>
        <ul className="task-list">
          {todos.map((todo, index) => (
            <li key={index} className="task-item">
              <span>{todo.text}</span>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

