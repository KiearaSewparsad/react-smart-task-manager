import { useState } from "react";

function TaskInput({ onAdd })
{
    const [input, setInput] = useState('')

    const handleAdd = () => {
        if (input.trim() !== ''){
            onAdd(input)
            setInput('')
        }
    }

    return (
    <div>
        <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        
        <button onClick={handleAdd}>Add Task</button>
    </div>
    )
}

export default TaskInput