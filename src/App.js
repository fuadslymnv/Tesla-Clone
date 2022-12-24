import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CustomCar from "./pages/CustomCar";
import ExistingCar from "./pages/ExistingCar";
import Inventory from "./pages/Inventory";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/inventory"
            element={
              <ProtectedRoute>
                <Inventory />
              </ProtectedRoute>
            }
          />
          <Route path="/buy/:item" element={<CustomCar />} />
          <Route path="/buy/existing/:item" element={<ExistingCar />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
