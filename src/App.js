import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <input className="task-input" type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li className="task-item" key={index}>
            {task}
            <button className="task-delete" onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
