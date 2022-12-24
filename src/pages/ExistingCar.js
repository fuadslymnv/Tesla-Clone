import React from "react";
import { useParams } from "react-router-dom";

const ExistingCar = () => {
  const params = useParams();
  return <div>ExistingCar {params.item}</div>;
};

export default ExistingCar;
