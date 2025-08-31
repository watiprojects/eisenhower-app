import { useState } from 'react'
import { useTaskStore } from '../../store/useTaskStore'
import '../App.css'
import { Navigate, useNavigate } from "react-router-dom";

function StepOne() {
    const [newTaskText, setNewTaskText] = useState("");
    const {tasks, addTask, editTask} = useTaskStore(); //hook to tasks, and add and edit task functions

    const navigate = useNavigate(); // hook to the navigate function

    return (
        <div className="flex-col items-center">
        <h1 className="font-bold text-2xl">The EISENHOWer</h1>
        <h2>Step 1: Mind Sweep</h2>
        <p className="mb-6">What tasks are swirling around in your mind? List them all!</p>
        <div className="flex-col text-left">
            <div className="mind-sweep-div bg-gray-200 h-[40vh] p-2 m-4 rounded-lg overflow-auto">
            <ul className="list-disc list-inside">
                {tasks.map(task => (
                <li 
                    key={task.id}>
                    <input
                    className="w-[80%]"
                    type="text"
                    value={task.text}
                    onChange = {(e) => editTask(task.id, e.target.value)}
                    />
                </li>
                ))}
                <li>
                <input
                    className="w-[80%]" 
                    type ="text"
                    placeholder = "Insert item here"
                    value={newTaskText} //local state for the new input
                    onChange = {(e) => setNewTaskText(e.target.value)}// update with each keystroke
                    onKeyDown={(e) => {
                    //Check for pressing enter, but ignores blank tasks
                    if (e.key === "Enter" && newTaskText.trim() !== ""){
                        addTask(newTaskText); //add task to the main array
                        setNewTaskText(""); //clear placeholder text for next input

                    } 
                    }}

                />
                </li>
            </ul>
            </div>
        </div>
        <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-lg" 
            onClick={() => {navigate("/step2")
            }}>Submit</button>
    </div>
    )
    }

export default StepOne;