import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  z-index: 1;
`;

const Main = styled.main``;


function Layout() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}

export default Layout;
