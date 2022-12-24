import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(UserAuth());
  return (
    <>
      <div>Inventory {user && [user.uid]}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Inventory;
