import React, { useState } from "react";
import styled from "styled-components";
import "./styles/order.css";
function Form({ name, image, enterMail, handleSubmit }) {
  console.log(name, image);
  const [check, setCheck] = useState(false);
  return (
    <Container>
      <Image bgImage={image} />
      <Wrapper>
        <ModelName>{name}</ModelName>

        <div className="form">
          <label htmlFor="username" className="labelInput">
            Enter mail for order:
          </label>
          <input
            autocomplete="off"
            type="text"
            name="username"
            id="username"
            className="input"
            onChange={enterMail}
          />

          {/* <label htmlFor="password" className="labelInput">
            Password: <br />
            <input
              type="password"
              name="password"
              id="password"
              className="input"
            />
          </label> */}

          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="accept"
              onClick={(event) => {
                setCheck(event.target.value);
                console.log(event.target.value, "eve");
              }}
            />
            <label htmlFor="checkbox" className="checkboxLabel">
              I Accept Agreements and terms of services
            </label>
          </div>

          <Button onClick={handleSubmit} disabled={!check} isDisabled={check}>
            BUY CAR
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Form;

const Image = styled.div`
  height: 100vh;
  background: ${(props) => `url("${props.bgImage}")`};
  background-size: cover;
  width: 650px;
  @media (max-width: 768px) {
    background-position: center;
    width: 390px;
    height: 200px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  background-color: white;
  padding: 16px;
  height: 100%;
  width: 500px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const ModelName = styled.h1`
  color: black;
  font-size: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 30px;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.isDisabled ? "#0469ff" : "#939393")};
  color: white;
  width: 100%;
  height: 50px;
  font-size: 20px;
  border-radius: 10.5339px;
  border: none;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;
