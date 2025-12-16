import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from './components/TaskList';

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
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App