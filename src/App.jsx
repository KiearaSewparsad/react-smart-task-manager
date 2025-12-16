import { useState } from "react";

function App()
{
  const [tasks, setTasks] = useState([])

  return (
    <div>
      <h1>Smart Task Manager</h1>
      <p>Total Tasks: {tasks.length}</p>

      <button onClick={() => setTasks(['Learn React'])}>
      Add Sample Task
      </button>
    </div>
  )
}

export default App