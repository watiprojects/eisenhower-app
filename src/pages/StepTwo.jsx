import { Navigate, useNavigate } from "react-router-dom";
import { useTaskStore } from "../../store/useTaskStore";
import TaskCard from "../components/TaskCard";
import { useEffect } from 'react';

function StepTwo() {
    
    const navigate = useNavigate();
    const {tasks, prevTask, nextTask, currentTaskIndex,toggleImportant, toggleUrgent} = useTaskStore(); 
    const currentTask = tasks[currentTaskIndex];

    //handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            //go to next task if arrow right
            if (e.key === "ArrowRight") {
                nextTask();
            }
            //go to previous task if arrow right
            else if (e.key === "ArrowLeft") {
                prevTask();
            }
        }
         window.addEventListener("keydown", handleKeyDown);
        return () => {
        window.removeEventListener("keydown", handleKeyDown);
        };
    }, [nextTask, prevTask]);

    return (
    <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">The EISENHOWer</h1>
        <h2>Step 2: Review and categorize</h2>
        <p>Is this important and/or urgent?</p>
        <div className="flex w-max-[90%] items-center">
            <button 
            className="flex-none text-gray-600"
            onClick={prevTask}>Previous
            </button>
            <div className="flex-grow">
                <TaskCard />
            </div> 
            <button 
            className="flex-none text-gray-600"
            onClick={nextTask}>Next
            </button>
        </div>
        <div className="flex gap-4 mb-8">
            {/* buttons to toggle importance and urgency - light grey if not selected, dark grey if selected */}
            <button
            className={`flex-none px-4 py-2 rounded-lg ${currentTask.important ? "bg-gray-700 text-white" : "bg-gray-500 text-white" }`}
            onClick={() => {toggleImportant(currentTask.id)}}>Important
            </button>

            <button 
            className={`flex-none px-4 py-2 rounded-lg ${currentTask.urgent ? "bg-gray-700 text-white" : "bg-gray-500 text-white" }`}
            onClick={() => {toggleUrgent(currentTask.id)}}>Urgent
            </button>
        </div>             
        <button type="button" className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg" 
        onClick={() => {navigate("/step3")
        }}>Continue to Step 3</button>
    </div>
    )
    }

export default StepTwo;