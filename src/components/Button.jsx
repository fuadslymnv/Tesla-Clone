import styled from "styled-components";

export default function Button({ content, OnClick }) {
  return <StyledButton onClick={OnClick}>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: rgba(23, 26, 32, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
