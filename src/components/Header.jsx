import styled from "styled-components";
import { useState } from "react";
import LogoImg from "../assets/logo.svg";
import HamImg from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import RequestBtn from "./RequestBtn";

const Container = styled.nav`
  width: 100%;
  margin: 0px auto;
  padding: 0px 1rem;
  height: 4.5rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 0px 9rem;
    z-index: 1;
  }
`;
const Logo = styled.img``;

const Menu = styled.ul`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 80px;
  background-color: #fff;
  margin: 1rem auto;
  width: 90%;
  height: fit-content;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: unset;
    position: unset;
  }
`;
const StyledLink = styled(NavLink)`
  align-self: end;
  width: 100%;
  text-align: center;
  margin: 0.8rem 0;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: unset;
    height: 100%;
    margin: 0;
    text-align: unset;
  }
`;
const MenuItem = styled.li`
  color: hsl(233, 8%, 62%);
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    width: unset;
  }
`;
const Underline = styled.div`
  width: 50%;
  height: 5px;
  margin: 0.5rem auto 0 auto;
  background: ${({ hover }) => hover};

  @media (min-width: 768px) {
    margin-top: 1.2rem;
    width: 100%;
  }
`;

const HamburgerMenu = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  border: none;
  color: #000;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.img``;
const HamburgerClose = styled.img``;

const NavMenu = ({ active, hover, setHover }) => (
  <Menu active={active}>
    <StyledLink
      onMouseOver={() => setHover("home")}
      onMouseOut={() => setHover("")}
    >
      <MenuItem>
        Home
        <Underline
          hover={
            hover === "home"
              ? "linear-gradient(to right, #2fd066, #2bb9cd)"
              : ""
          }
        />
      </MenuItem>
    </StyledLink>
    <StyledLink
      onMouseOver={() => setHover("about")}
      onMouseOut={() => setHover("")}
    >
      <MenuItem>
        About
        <Underline
          hover={
            hover === "about"
              ? "linear-gradient(to right, #2fd066, #2bb9cd)"
              : ""
          }
        />
      </MenuItem>
    </StyledLink>
    <StyledLink
      onMouseOver={() => setHover("contact")}
      onMouseOut={() => setHover("")}
    >
      <MenuItem>
        Contact
        <Underline
          hover={
            hover === "contact"
              ? "linear-gradient(to right, #2fd066, #2bb9cd)"
              : ""
          }
        />
      </MenuItem>
    </StyledLink>
    <StyledLink
      onMouseOver={() => setHover("blog")}
      onMouseOut={() => setHover("")}
    >
      <MenuItem>
        Blog
        <Underline
          hover={
            hover === "blog"
              ? "linear-gradient(to right, #2fd066, #2bb9cd)"
              : ""
          }
        />
      </MenuItem>
    </StyledLink>
    <StyledLink
      onMouseOver={() => setHover("careers")}
      onMouseOut={() => setHover("")}
    >
      <MenuItem>
        Careers
        <Underline
          hover={
            hover === "careers"
              ? "linear-gradient(to right, #2fd066, #2bb9cd)"
              : ""
          }
        />
      </MenuItem>
    </StyledLink>
  </Menu>
);

function Header() {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState("");

  return (
    <Container>
      <Logo src={LogoImg} />
      <NavMenu active={active} hover={hover} setHover={setHover} />
      <HamburgerMenu
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? <HamburgerClose src={Close} /> : <Hamburger src={HamImg} />}
      </HamburgerMenu>
      <RequestBtn display={"false"} text={"Request Invite"} />
    </Container>
  );
}

export default Header;
