import { useTaskStore } from '../../store/useTaskStore'


function TaskCard ({task}){
    const {tasks, currentTaskIndex} = useTaskStore();
    
    //statement if no tasks
    if (tasks.length === 0) {
        return <p> No tasks yet </p>;
    }
    
    const currentTask = tasks[currentTaskIndex]

    return (   
        <div className="m-6 p-4 w-sm border rounded shadow">
            {/* display current task */}
            <p>{currentTask.text}</p>
            {/* display number of tasks */}
            <p className="text-sm text-gray-500">
                Task {currentTaskIndex + 1} of {tasks.length} 
            </p>
        </div>
        
    );
}

export default TaskCard;
