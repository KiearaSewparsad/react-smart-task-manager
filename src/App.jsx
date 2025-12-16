import { useState } from "react";
import TaskInput from "./components/TaskInput";

function App()
{
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  return (
    <div>
      <h1>Smart Task Manager</h1>
      <p>Total Tasks: {tasks.length}</p>

      
      <TaskInput onAdd={addTask} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App