import React, { useState } from "react";
import "./App.css";

function App() {
  const [light, setLight] = useState("");

  return (
    <div className="app">
      <h1>Traffic Light</h1>
      <div className="traffic-light">
        <div className={`circle red ${light === "red" ? "on" : ""}`}></div>
        <div className={`circle yellow ${light === "yellow" ? "on" : ""}`}></div>
        <div className={`circle green ${light === "green" ? "on" : ""}`}></div>
      </div>

      <div className="buttons">
        <button onClick={() => setLight("red")}>Red</button>
        <button onClick={() => setLight("yellow")}>Yellow</button>
        <button onClick={() => setLight("green")}>Green</button>
      </div>
    </div>
  );
}

export default App;
