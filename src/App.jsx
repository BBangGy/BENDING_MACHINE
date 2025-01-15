import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MoneyProvider } from "./context/MoneyContext.jsx";
import "./App.css";
import First from "./pages/showingpage/first.jsx";
import BendingMachine from "./pages/bending/bendingMachine.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MoneyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/bending" element={<BendingMachine />} />
          </Routes>
        </BrowserRouter>
      </MoneyProvider>
    </div>
  );
}

export default App;
