import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import First from "./pages/showingpage/first.jsx"
import Bending from "./pages/bending/bendingMachine.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<First/>}></Route>
        <Route path='/bending' element={<Bending/>}></Route>
      </Routes>
    </div>
    
  )
}

export default App
