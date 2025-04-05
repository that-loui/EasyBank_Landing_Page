import styled from "styled-components";
import ApiImg from "../assets/icon-api.svg";
import BudgetingImg from "../assets/icon-budgeting.svg";
import OnlineImg from "../assets/icon-online.svg";
import OnboardingImg from "../assets/icon-onboarding.svg";

const Container = styled.section`
  background-color: #f4f5f7;
  padding: 5rem 1rem;

  @media (min-width: 768px) {
    padding: 7rem 9rem;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    align-items: start;
    width: 45%;
    text-align: start;
  }
`;

const HeaderHeading = styled.h3`
  font-weight: 400;
  font-size: 2rem;
  color: #2e3045;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const HeaderText = styled.p`
  padding: 1.5rem 0 0rem 0;
  color: #a3a3a5;
  font-size: 15.5px;
  line-height: 1.5;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  margin: 5rem 0 0 0;
  gap: 4.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    align-items: start;
  }
`;

const CardIcon = styled.img``;

const CardHeader = styled.h5`
  font-weight: 200;
  font-size: 1.3rem;
  margin: 1.5rem 0;
  color: #2e3045;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #a3a3a5;
  line-height: 1.3;
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;

const Card = ({ src, heading, bodyText }) => (
  <CardContainer>
    <CardIcon src={src} />
    <CardHeader>{heading}</CardHeader>
    <CardText>{bodyText}</CardText>
  </CardContainer>
);

function FAQ() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderHeading>Why choose Easybank?</HeaderHeading>
        <HeaderText>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </HeaderText>
      </HeaderContainer>
      <Grid>
        <Card
          src={OnlineImg}
          heading={"Online Banking"}
          bodyText={
            "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          }
        />
        <Card
          src={BudgetingImg}
          heading={"Simple Budgeting"}
          bodyText={
            "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
          }
        />
        <Card
          src={OnboardingImg}
          heading={"Fast Onboarding"}
          bodyText={
            "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          }
        />
        <Card
          src={ApiImg}
          heading={"Open Api"}
          bodyText={
            "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          }
        />
      </Grid>
    </Container>
  );
}

export default FAQ;
