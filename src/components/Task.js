import { getSuggestedQuery } from "@testing-library/react"

const Task = ({ task }) => {
    const doStuff = () => { console.log("Stuff is being done!")}
    
    return ( 
        <div onClick={doStuff} className='task'>
            <h3>{task.text}</h3>
            <p>{task.id}</p>
        </div>
    )
}

export default Task;