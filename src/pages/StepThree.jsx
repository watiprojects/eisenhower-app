import { Navigate, useNavigate } from "react-router-dom";
import { useTaskStore } from "../../store/useTaskStore";

function StepThree() {
    const navigate = useNavigate(); 
    const {tasks, addTask, editTask} = useTaskStore();

        return (
        <div className="flex flex-col items-center">
            <h1>Here is your Eisenhower Matrix!</h1>
            {/*Eisenhower Matrix div*/}
            <div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-300 p-4 rounded">
                        <p className="font-bold">Quadrant 1: Important and Urgent</p>
                        <ul className="list-disc list-inside ">
                            {/*Quadrant 1: List task if task is urgent and important*/}
                            {tasks.filter(task => task.important && task.urgent).map(task => (
                                <li key = {task.id}>{task.text}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-300 p-4 rounded">
                        <p className="font-bold">Quadrant 2: Important, Not Urgent</p>
                        <ul className="list-disc list-inside">
                            {/*Quadrant 2: Important, not urgent*/}
                            {tasks.filter(task => task.important && !task.urgent).map(task => (
                                <li key = {task.id}>{task.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-300 p-4 rounded">
                        <p className="font-bold">Quadrant 3: Urgent, Not Important </p>
                        <ul className="list-disc list-inside">
                            {/*Quadrant 3: Urgent, Not Important*/}
                            {tasks.filter(task => !task.important && task.urgent).map(task => (
                                <li key = {task.id}>{task.text}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-300 p-4 rounded">
                        <p className="font-bold">Quadrant 4: Not Important, Not Urgent </p>
                        <ul className="list-disc list-inside">
                            {/*Quadrant 4: Not Important, Not Urgent*/}
                            {tasks.filter(task => !task.important && !task.urgent).map(task => (
                                <li key = {task.id}>{task.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-lg" 
            onClick={() => {navigate("/step2")
            }}>Back</button>
        </div>
    )
    }

export default StepThree;