import styled from "styled-components";
import Section from "./Section";
function Home({ burgerStatus }) {
  const sections = [
    {
      id: "model-s",
      title: "Model S",
      description: "Schedule a Test Drive",
      backgroundImg: ["carA_front.png", "carA_rear.png"],
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
    },
    {
      id: "model-3",
      title: "Model 3",
      description: "Schedule a Test Drive",
      backgroundImg: ["Dodge_front.png", "Dodge_rear.png"],
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
    },
    {
      id: "model-x",
      title: "Model X",
      description: "Schedule a Test Drive",
      backgroundImg: ["porsche_front.png", "porsche_rear.png"],
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
    },
    {
      id: "model-y",
      title: "Model Y",
      description: "Schedule a Test Drive",
      backgroundImg: ["skyline_front.png", "skyline_rear.png"],
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
    },
    {
      id: "solar-roof",
      title: "Lowest Cost Solar Panels in America",
      description: "Money-back guarantee",
      backgroundImg: ["Dodge_front.png", "Dodge_rear.png"],
      leftBtnText: "Order now",
      rightBtnText: "Learn More",
    },
  ];

  return (
    <Container show={burgerStatus}>
      {sections.map((section) => {
        return (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            backgroundImg={section.backgroundImg}
            leftBtnText={section.leftBtnText}
            rightBtnText={section.rightBtnText}
          />
        );
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  filter: ${(props) => (props.show ? "blur(5px)" : "blur(0px)")};
`;
