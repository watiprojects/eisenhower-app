import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div className="flex-col items-center">
      <h1>The EISENHOWer</h1>
      <h2>Step 1: Mind Sweep</h2>
      <p>What tasks are swirling around in your mind? List them all!</p>
      <div className="flex-col text-left">
        <div className="mind-sweep-div bg-gray-200 h-[40vh] p-2 m-4 rounded-lg">
          <ul className="list-disc list-inside">
            <li>
              <input
                type ="text"
                placeholder = "Insert item here"
              />
            </li>
            <li>test</li>
          </ul>
        </div>
      </div>
      <button type="submit" className="px-4 py-2 bg-gray-600 text-white rounded-lg">Submit</button>
    </div>
  )
}

export default App
