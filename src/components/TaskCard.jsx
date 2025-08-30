import { useTaskStore } from '../../store/useTaskStore'
import { useEffect } from 'react';


function TaskCard ({task}){
    const {tasks, currentTaskIndex, toggleImportant, toggleUrgent} = useTaskStore();
    const currentTask = tasks[currentTaskIndex];
    
    //statement if no tasks
    if (tasks.length === 0) {
        return <p> No tasks yet </p>;
    }

    //handle keyboard navigation
        useEffect(() => {
            const handleKeyDown = (e) => {
                //go to next task if arrow right
                if (e.key === "i") {
                    toggleImportant();
                }
                //go to previous task if arrow right
                else if (e.key === "u") {
                    toggleUrgent();
                }
            }
            window.addEventListener("keydown", handleKeyDown);
            return () => {
            window.removeEventListener("keydown", handleKeyDown);
            };
        }, [toggleImportant, toggleUrgent]);


    return (   
        <div className="m-6 p-4 w-sm border rounded shadow">
            {/* display current task */}
            <p>{currentTask.text}</p>
            {/* display number of tasks */}
            <p className="text-sm text-gray-500">
                Task {currentTaskIndex + 1} of {tasks.length} 
            </p>
            {/* display important and urgent labels*/}
            {/* if important is active display in box
                if it is true that the current task has important then display the words important at the bottom
            */}
            <p></p>
        </div>
        
    );
}

export default TaskCard;
