import { useTaskStore } from '../../store/useTaskStore'
import { useEffect } from 'react';


function TaskCard ({task}){
    const {tasks, currentTaskIndex, toggleImportant, toggleUrgent} = useTaskStore();
    const currentTask = tasks[currentTaskIndex];
    
    //statement if no tasks
    if (tasks.length === 0) {
        return <p className="p-8"> No tasks yet </p>;
    }

    //handle keyboard navigation
        useEffect(() => {
            const handleKeyDown = (e) => {
                //go to next task if arrow right
                if (e.key === "i") {
                    toggleImportant(currentTask.id);
                }
                //go to previous task if arrow right
                else if (e.key === "u") {
                    toggleUrgent(currentTask.id);
                }
            }
            window.addEventListener("keydown", handleKeyDown);
            return () => {
            window.removeEventListener("keydown", handleKeyDown);
            };
        }, [toggleImportant, toggleUrgent, currentTask.id]);


    return (   
        <div className="m-6 p-4 w-sm border rounded shadow">
            {/* display current task */}
            <p className="w-[100%] overflow-scroll">{currentTask.text}</p>
            {/* display number of tasks */}
            <p className="text-sm text-gray-500">
                Task {currentTaskIndex + 1} of {tasks.length} 
            </p>
            {/* display important and urgent labels*/}
            {/* keep placeholders but hide the visibilty
            */}
            <div className ="mt-2 flex justify-between">
                {/* important label*/}
                <span className = {`px-2 py-1 rounded ${currentTask.important ? "font-bold" : "invisible" }`}
                > 
                {currentTask.important ? "Important" : ""}
                </span>

                {/* urgent label*/}
                <span className = {`px-2 py-1 rounded ${currentTask.urgent ? "font-bold" : "invisible" }`}
                > 
                {currentTask.urgent ? "Urgent" : ""}
                </span>
            </div>
        </div>
        
    );
}

export default TaskCard;
