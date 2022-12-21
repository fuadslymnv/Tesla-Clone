import React, { useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";

const Landing = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const handleClick = (status) => {
    setBurgerStatus(status);
  };
  return (
    <div>
      <Header handleClick={handleClick} burgerStatus={burgerStatus} />
      <Home burgerStatus={burgerStatus} />
    </div>
  );
};

export default Landing;
