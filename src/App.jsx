import { Routes, Route, Link } from "react-router-dom"; import StepOne from "./pages/StepOne"; import StepTwo from "./pages/StepTwo"; import StepThree from "./pages/StepThree";


function App() {
  return (
    <div>
      <nav className="flex flex-col md:flex-row gap-4 mb-8 justify-center text-gray-600">
        <Link to ="/step1">1 - Mind Sweep</Link>
        <Link to ="/step2">2 - Categorize</Link>
        <Link to ="/step3">3 - View Results</Link>
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
