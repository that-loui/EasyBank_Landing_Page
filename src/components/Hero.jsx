import Background from "../assets/bg-intro-desktop.svg";
import BackgroundMobile from "../assets/bg-intro-mobile.svg";
import MockUp from "../assets/image-mockups.png";
import styled from "styled-components";
import RequestBtn from "./RequestBtn";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;


  @media (min-width: 768px) {
    background-image: url(${Background});
    background-position: 200% 70%;
    background-size: 75%;
    background-repeat: no-repeat;
    padding-left: 9rem;
    height: 35rem;
    z-index: 0;

    &::before {
      content: "";
      position: absolute;
      top: -6.9rem;
      right: -15rem;
      background-image: url(${MockUp});
      background-repeat: no-repeat;
      background-size: 85%;
      height: 60rem;
      width: 50rem;
      z-index: 1;
    }
  }
`;

const BackgroundContainer = styled.div`
  background-color: #fafafa;
  background-image: url(${BackgroundMobile});
  background-position: 20% 5%;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 20.5rem;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: -5%;
    right: 5%;
    background-image: url(${MockUp});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    width: 85%;
    z-index: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin: 2rem auto 4rem auto;

  @media (min-width: 768px) {
    width: 45%;
    margin: 0;
    align-items: start;
  }
`;

const Header = styled.h1`
  color: #2e3045;
  font-size: 2.3rem;
  font-weight: 350;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3.7rem;
    text-align: start;
  }
`;

const Text = styled.p`
  margin: 2rem 0;
  font-weight: 450;
  font-size: 14.9px;
  line-height: 1.5;
  color: #a3a3a5;
  text-align: center;

  @media (min-width: 768px) {
    width: 82%;
    font-size: 20px;
    text-align:start;
    
  }
`;

function Hero() {
  return (
    <Container>
      <BackgroundContainer />
      <TextContainer>
        <Header>Next generation digital banking</Header>
        <Text>
          Take your financial life online. Your Easybank account will be your
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Text>
        <RequestBtn display={"true"} text={"Request Invite"} />
      </TextContainer>
    </Container>
  );
}

export default Hero;
