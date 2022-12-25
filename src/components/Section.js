import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  id,
}) {
  const slug = () => {
    let lowTitle = title.toLowerCase();
    if (lowTitle.includes(" ")) {
      return lowTitle.split(" ").join("-");
    }
    return lowTitle;
  };
  return (
    <Wrap id={id} bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p className="underline">{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <Link to={`/buy/${slug()}`}>
              <LeftButton>{leftBtnText}</LeftButton>
            </Link>
            {rightBtnText && (
              <Link to={`/buy/existing/${slug()}`}>
                <RighButton>{rightBtnText}</RighButton>
              </Link>
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  font-weight: 600; // me added
`;

const RighButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;
