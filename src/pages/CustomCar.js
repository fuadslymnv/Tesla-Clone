import React from "react";
import { useParams } from "react-router-dom";
const CustomCar = () => {
  const params = useParams();
  return <div>CustomCar {params.item}</div>;
};

export default CustomCar;
