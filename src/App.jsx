// src/App.jsx - BONUS VERSION using reusable Exponent component
import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App() {
  // Lifted state to the common parent (App)
  const [count, setCount] = useState(0);
  
  // State logic moved to App
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
      <Counter 
        count={count} 
        increment={increment} 
        decrement={decrement} 
      />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {/* Using the reusable Exponent component */}
        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} />
        <Exponent num={count} exponent={4} />
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;