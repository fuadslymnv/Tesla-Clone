import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  id,
}) {
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
            <LeftButton>{leftBtnText}</LeftButton>

            {rightBtnText && <RighButton>{rightBtnText}</RighButton>}
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
  height: 110vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: image 2s infinite alternate;
  @keyframes image {
    0% {
      background-image: ${(props) => `url("./images/${props.bgImage[0]}")`};
    }
    100% {
      background-image: ${(props) => `url("./images/${props.bgImage[1]}")`};
    }
  }
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
    color: #eadcdc;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: #101820;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;
  font-weight: 600; // me added
`;

const RighButton = styled(LeftButton)`
  background-color: #fee715;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;
