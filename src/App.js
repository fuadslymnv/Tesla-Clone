import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MainLogin from "./components/Login/MainLogin"
import MainSignup from "./components/Signup/MainSignup"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<MainLogin />} />
        <Route path="/signup" element={<MainSignup />} />
      </Routes>
    </div>
  );
}

export default App;
