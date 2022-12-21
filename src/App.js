import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const handleClick = (status) => {
    setBurgerStatus(status);
  };
  return (
    <div className="App">
      <Header handleClick={handleClick} burgerStatus={burgerStatus} />
      <Home burgerStatus={burgerStatus} />
    </div>
  );
}

export default App;
