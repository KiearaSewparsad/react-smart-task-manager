import { useState, useEffect } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    if (!text.trim()) return
    setTasks([...tasks, { text, completed: false }])
  }

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'space-between',
      alignItems: 'center',
      maxWidth:'500px',
      margin:'50px auton',
      padding:'20px',
      borderRadius:'10px',
      backgroundColor:'#f8f8f8',
      boxShadow:'0 4px 8px #000001',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{textAlign: 'center', color: '#333'}}>Smart Task Manager</h1>
      <p style={{textAlign:'center', color:'#666'}}>Total Tasks: {tasks.length}</p>
      <p style={{textAlign:'center', color:'#999'}}>Current filter: {filter}</p>

      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter}/>

      <div style={{textAlign:'center', marginTop: '10px 0'}}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')} style={{ marginLeft: '5px'}}>
          Active
        </button>
        <button onClick={() => setFilter('completed')} style={ {marginLeft: '5px'}}>
          Completed
        </button>
        <button onClick={ () => setTasks(tasks.filter(task => !task.completed))}
          style={{marginTop:'10px'}}>
            Clear Completed
          </button>
      </div>
    </div>
  )
}

export default App
