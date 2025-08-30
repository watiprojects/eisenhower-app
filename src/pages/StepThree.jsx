import { Navigate, useNavigate } from "react-router-dom";

function StepThree() {
    const navigate = useNavigate(); // hook to the navigate function

        return (
        <div className="flex-col items-center">
        <h1>Here is your Eisenhower Matrix!</h1>
        <div>
        </div>
            <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-lg" 
            onClick={() => {navigate("/step2")
            }}>Back</button>
    </div>
    )
    }

export default StepThree;