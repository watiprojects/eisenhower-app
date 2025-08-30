import { Navigate, useNavigate } from "react-router-dom";
import { useTaskStore } from "../../store/useTaskStore";
import TaskCard from "../components/TaskCard";
import { useEffect } from 'react';

function StepTwo() {
    
    const navigate = useNavigate();
    const {prevTask, nextTask} = useTaskStore(); 

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
        <h1>The EISENHOWer</h1>
        <h2>Step 2: Review and categorize</h2>
        <p>Is this important and/or urgent?</p>
        <TaskCard />              
        <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-lg" 
        onClick={() => {navigate("/step3")
        }}>Submit</button>
    </div>
    )
    }

export default StepTwo;