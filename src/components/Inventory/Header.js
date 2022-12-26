import React from "react";
import styled from "styled-components";

export default function Header({ username }) {
  return (
    <div className="container">
      <Wrapper>
        <WelcomeText>Welcome, {username}</WelcomeText>
        <img src="/images/logo.svg" alt="" />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  margin: 10px 20px;
  padding: 10px 0;
  img {
    height: 16px;
    @media (max-width: 768px) {
      height: 12px;
    }
  }
`;

const WelcomeText = styled.h1`
  font-size: 2em;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;
