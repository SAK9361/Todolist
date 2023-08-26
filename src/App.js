import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTodo = () => {
    if (task.trim() !== '') {
      const currentDate = new Date();  
      const formattedDate = currentDate.toLocaleString();  
      const newTask = `${task} - Added on: ${formattedDate}`; 
      setTodos([...todos, newTask]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Info Tech</h1>
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        placeholder="Enter a task..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
