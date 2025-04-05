import styled from "styled-components";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Articles from "./components/Articles";

const Container = styled.section`
    display: flex;
    flex-direction: column;
`;


function Homepage() {
  return (
    <>
      <Container>
        <Hero />
        <FAQ />
        <Articles />
      </Container>
    </>
  );
}

export default Homepage;
