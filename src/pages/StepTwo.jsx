import { Navigate, useNavigate } from "react-router-dom";

function StepTwo() {
    
    const navigate = useNavigate(); // hook to the navigate function

        return (
        <div className="flex-col items-center">
        <h1>The EISENHOWer</h1>
        <h2>Step 2: Review and categorize</h2>
        <p>Is this important and/or urgent?</p>
        <div>
        </div>
            <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-lg" 
            onClick={() => {navigate("/step3")
            }}>Submit</button>
    </div>
    )
    }

export default StepTwo;