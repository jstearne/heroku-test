import Task from './Task';
import { useState } from 'react';

const Tasks = ({ tasks }) => {
    const [query, setQuery] = useState();
    
    return(
        <div>
        {tasks.map((task) => (
            <Task key={task.id} task={task} />
        ))}
            <input 
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                />
        </div>
    );
}

export default Tasks;