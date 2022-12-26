import React from "react";
import Form from "../components/Order/Form";
import { useParams } from "react-router-dom";

const ExistingCar = () => {
  const params = useParams();
  return <Form />;
};

export default ExistingCar;
