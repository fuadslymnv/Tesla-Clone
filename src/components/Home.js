import styled from "styled-components";
import Section from "./Section";
function Home({ burgerStatus }) {
  return (
    <Container show={burgerStatus}>
      {/* <Section
        id="model-s"
        title="Model S"
        description="Schedule a Test Drive"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      /> */}
      <Section
        id="model-s"
        title="Model S"
        description="Schedule a Test Drive"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText=""
      />
      <Section
        id="model-3"
        title="Model 3"
        description="Schedule a Test Drive"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText=""
      />
      <Section
        id="model-x"
        title="Model X"
        description="Schedule a Test Drive"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText=""
      />
      <Section
        id="model-y"
        title="Model Y"
        description="Schedule a Test Drive"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText=""
      />
      <Section
        id="solar-roof"
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText=""
      />
      <Section
        id="solar-panel"
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  filter: ${(props) => (props.show ? "blur(10px)" : "blur(0px)")};
`;
