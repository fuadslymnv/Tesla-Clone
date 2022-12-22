import styled from "styled-components";
import Button from "./Button";
import Fade from "react-reveal/Fade";
import Input from "./Input";
import "./styles/login.css";
import { Link } from "react-router-dom";

function MainLogin() {
  return (
    <div className="mainLogin">
      <Fade top>
        <MainContainer>
          <WelcomeText>Login</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Email" />
            <br />
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <br />
          <ButtonContainer>
            <Button content="Log in" />
          </ButtonContainer>
          <LoginWith>
            <Link to="/signup">OR SIGN UP</Link>
          </LoginWith>
          <HorizontalRule />

          <ForgotPassword>Forgot Password ?</ForgotPassword>
        </MainContainer>
      </Fade>
    </div>
  );
}

export default MainLogin;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  padding-top: 2rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 60vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h1`
  margin: 3rem 0 2rem 0;
  color: black;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  color: black;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: rgba(23, 26, 32, 0.8);
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  color: black;
`;
