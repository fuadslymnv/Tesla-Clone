import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import InventoryHeader from "../components/Inventory/Header";
import Car from "../components/Inventory/Car";
import styled from "styled-components";

const Inventory = () => {
  const { user, logout } = UserAuth();
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "users", user.uid);
      onSnapshot(docRef, (doc) => {
        const docData = doc.data();
        setInventory(docData.inventory);
      });
    };

    getData();
  }, [user]);

  if (!inventory) {
    return <>Loading..</>;
  }

  return (
    <>
      <InventoryHeader username={user.email} />
      <div className="container">
        <Text>
          {inventory.length
            ? "Your Tesla Inventory"
            : "Your Tesla Inventory is empty now, please buy tesla products to fill it"}
        </Text>
        <CarContainer>
          {inventory.length
            ? inventory.map((item) => (
                <Car key={item.path} name={item.name} src={item.image} />
              ))
            : ""}
        </CarContainer>
      </div>
      <Footer>
        <LogOutBtn onClick={handleLogout}>Log out</LogOutBtn>
      </Footer>
    </>
  );
};

export default Inventory;

const Text = styled.div`
  margin-top: 40px;
  margin-left: 25px;
  height: 116px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-align: left;
  line-height: 58px;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width: 1180px) {
    display: flex;
    margin-top: 10px;
    font-size: 28px;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    text-align: start;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    width: 100%;
    height: 100%;
  }
`;

const CarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 16px;
`;

const LogOutBtn = styled.button`
  font-size: 1.5em;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  color: white;
  background-color: black;
  border: 1px;
  position: fixed;
  left: 20px;
  bottom: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 16px;
`;
