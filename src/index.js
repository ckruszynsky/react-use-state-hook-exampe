import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [age, setAge] = useState(21);
  const handleAgeUp = () => {
    setAge(age + 1);
  };

  const handleAgeDown = () => {
    setAge(age - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use State Hook</h1>
        <h2>Age: {age}</h2>
        <button onClick={handleAgeUp}>Age up</button>
        <button onClick={handleAgeDown}>Age down</button>
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
