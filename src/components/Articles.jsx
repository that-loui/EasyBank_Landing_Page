import styled from "styled-components";
import ArticleImg1 from "../assets/image-currency.jpg";
import ArticleImg2 from "../assets/image-restaurant.jpg";
import ArticleImg3 from "../assets/image-plane.jpg";
import ArticleImg4 from "../assets/image-confetti.jpg";
import propTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 5rem 1rem;

  @media (min-width: 768px) {
    padding: 7rem 9rem;
  }
`;
const Header = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  color: #2e3045;
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
    gap: 4rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 10px;

  @media (min-width: 768px) {
    align-items: start;
    box-shadow: 0px 0px 0px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`;

const TextContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

const CardHighlight = styled.small`
  font-size: 12px;
  color: #a3a3a3;
`;

const CardHeader = styled.h4`
  font-weight: 400;
  font-size: 0.8rem;
  margin: 1rem 0;
  color: #2e3045;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CardText = styled.p`
  font-size: 0.65rem;
  color: #a3a3a5;
  line-height: 1.3;

  @media (min-width: 768px) {
    text-align: start;
    font-size: 13px;
  }
`;

const Card = ({ src, by, Heading, Text }) => (
  <CardContainer>
    <CardImg src={src} />
    <TextContainer>
      <CardHighlight>{by}</CardHighlight>
      <CardHeader>{Heading}</CardHeader>
      <CardText>{Text}</CardText>
    </TextContainer>
  </CardContainer>
);

function Articles() {
  return (
    <Container>
      <Header>Latest Articles</Header>
      <Grid>
        <Card
          src={ArticleImg1}
          by={"By Claire Robinson"}
          Heading={"Receive money in any currency with no fees"}
          Text={
            "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single..."
          }
        />
        <Card
          src={ArticleImg2}
          by={"By Wilson Hutton"}
          Heading={"Treat yourself without worrying about money"}
          Text={
            "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
          }
        />
        <Card
          src={ArticleImg3}
          by={"By Wilson Hutton"}
          Heading={"Take your Easybank card wherever you go"}
          Text={
            "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you..."
          }
        />
        <Card
          src={ArticleImg4}
          by={"By Claire Robinson"}
          Heading={"Our invite-only Beta accounts are now live! "}
          Text={
            "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site..."
          }
        />
      </Grid>
    </Container>
  );
}

Card.PropTypes = {
  by: propTypes.string.isRequired,
  Heading: propTypes.string.isRequired,
  Text: propTypes.string.isRequired,
};

export default Articles;
