function TaskItem({task, onDelete})
{
    return(
        <li>
            {task}
            <button onClick={onDelete} style={{marginLeft: '10px'}}>delete</button>
        </li>
    )
}

export default TaskItem