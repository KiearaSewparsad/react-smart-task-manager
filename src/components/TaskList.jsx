import TaskItem from './TaskItem'

function TaskList({tasks, setTasks})
{
    const handleDelete = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index)
        setTasks(newTasks)
    }

    return(
        <ul>
            {tasks.map((task, index) =>(
                <TaskItem
                key={index}
                task={task}
                onDelete={() => handleDelete(index)}
                />
            ))}
        </ul>
    )
}

export default TaskList