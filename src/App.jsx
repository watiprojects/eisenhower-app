import { Routes, Route, Link } from "react-router-dom"; import StepOne from "./pages/StepOne"; import StepTwo from "./pages/StepTwo"; import StepThree from "./pages/StepThree";


function App() {
  return (
    <div>
      <Routes>
        {/* Home route */}
        <Route path ="/" element ={<StepOne />} />
        
        {/* Other steps */}
        <Route path ="/step1" element={<StepOne />} />
        <Route path ="/step2" element={<StepTwo />} />
        <Route path ="/step3" element={<StepThree />} />
      </Routes>
    </div>
  )
  
}

export default App
