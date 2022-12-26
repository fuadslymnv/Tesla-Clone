import React, { useState, useEffect } from "react";
import Form from "../components/Order/Form";
import { useParams } from "react-router-dom";
import carData from "../carData.json";
import {
  query,
  where,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase";
const CustomCar = () => {
  const params = useParams();
  const [car, setCar] = useState({});
  const [mail, setMail] = useState("");
  const colRef = collection(db, "users");
  const q = query(colRef, where("email", "==", mail));
  console.log(q);
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSnapshot(q, async (snapshot) => {
      try {
        const docData = snapshot.docs[0];
        const docu = doc(db, "users", docData.id);
        await updateDoc(docu, {
          inventory: arrayUnion(car),
        });
        alert("Successful:" + car.name);
      } catch (error) {
        alert("Error:" + error.message);
      }
    });
  };
  useEffect(() => {
    setCar(carData.find((car) => params.item === car.path));
  }, []);
  return (
    <Form
      name={car.name}
      image={car.image}
      handleSubmit={handleSubmit}
      enterMail={handleMailChange}
    />
  );
};

export default CustomCar;
