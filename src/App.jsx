import { Routes, Route, Link } from "react-router-dom"; import StepOne from "./pages/StepOne"; import StepTwo from "./pages/StepTwo"; import StepThree from "./pages/StepThree";


function App() {
  return (
    <div>
      <nav className="flex gap-4 mb-6 justify-center text-gray-600">
        <Link to ="/step1">Step 1</Link>
        <Link to ="/step2">Step 2</Link>
        <Link to ="/step3">Step 3</Link>
      </nav>
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
