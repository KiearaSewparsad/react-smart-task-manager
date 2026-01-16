function TaskItem({task, onDelete, onToggle })
{
    return(
        <li style={{textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'grey' : 'black',
            marginBottom: '5px'
        }}
        >
            {task.text}
            <button onClick={onToggle} style={{marginLeft: '10px'}}>{task.completed ? '↩️':'✅'}</button>
            <button onClick={onDelete} style={{marginLeft:'5px'}}>🗑️</button>
        </li>
    )
}

export default TaskItem