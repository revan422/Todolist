import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input,
      time: new Date().toLocaleTimeString(),
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>History</h2>
        <button className="all-tasks">All Tasks</button>
        <p className="date">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "numeric", day: "numeric", year: "numeric" })}</p>
      </aside>

      <main className="main">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <small>{task.time}</small>
              <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
