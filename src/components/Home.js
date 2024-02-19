import styled from "styled-components";
import Section from "./Section";
function Home({ burgerStatus }) {
  return (
    <Container show={burgerStatus}>
      <Section
        id="model-s"
        title="Model S"
        description="Schedule a Test Drive"
        backgroundImg="carA_front.png"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="model-3"
        title="Model 3"
        description="Schedule a Test Drive"
        backgroundImg="Dodge_front.png"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="model-x"
        title="Model X"
        description="Schedule a Test Drive"
        backgroundImg="porsche_front.png"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="model-y"
        title="Model Y"
        description="Schedule a Test Drive"
        backgroundImg="skyline_front.png"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="solar-roof"
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="cybercar.png"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  filter: ${(props) => (props.show ? "blur(5px)" : "blur(0px)")};
`;
