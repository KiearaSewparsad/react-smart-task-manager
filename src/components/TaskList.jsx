import TaskItem from './TaskItem'

function TaskList({ tasks, setTasks, filter }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const handleToggle = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }
  return (
    <ul>
      {filteredTasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggle={() => handleToggle(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </ul>
  )
}

export default TaskList