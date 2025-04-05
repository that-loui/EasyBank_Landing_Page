import styled from "styled-components";
import RequestBtn from "./RequestBtn";
import LogoImg from "../assets/logo.svg";
import twitter from "../assets/icon-twitter.svg";
import youtube from "../assets/icon-youtube.svg";
import pinterest from "../assets/icon-pinterest.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import { NavLink } from "react-router-dom";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #2d314e;
  color: #fff;
  padding: 5rem 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 3rem 9rem;
    height: auto;
  }
`;

const Logo_IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img``;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4.5rem;
`;
const Icons = styled.img`
  margin: 0rem 0.5rem;
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const Link = styled(NavLink)`
  color: #d3d3d3;
  padding-top: 1rem;
`;

const ExtraItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  width: 40%;
`;

const Logo_Icons = () => (
  <Logo_IconContainer>
    <NavLink>
      <Logo src={LogoImg} />
    </NavLink>
    <IconsContainer>
      <NavLink>
        <Icons src={facebook} />
      </NavLink>
      <NavLink>
        <Icons src={youtube} />
      </NavLink>
      <NavLink>
        <Icons src={twitter} />
      </NavLink>
      <NavLink>
        <Icons src={pinterest} />
      </NavLink>
      <NavLink>
        <Icons src={instagram} />
      </NavLink>
    </IconsContainer>
  </Logo_IconContainer>
);

const Links = () => (
  <LinksContainer>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link>About us</Link>
      <Link>Contact</Link>
      <Link>Blog</Link>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link>Careers</Link>
      <Link>Support</Link>
      <Link>Privacy Policy</Link>
    </div>
  </LinksContainer>
);

function Footer() {
  return (
    <Container>
      <Logo_Icons />
      <Links />
      <ExtraItemsContainer>
        <RequestBtn text={"Request Invite"}></RequestBtn>
        <p style={{ paddingTop: "2.5rem", color: "#484D69" }}>
          @Easybank. All Rights Reserved
        </p>
      </ExtraItemsContainer>
    </Container>
  );
}

export default Footer;
