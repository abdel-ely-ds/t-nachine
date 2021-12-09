import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../Globalstyles";
import { StyledLink } from "../Link/Link.styles";

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 60px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover {
    color: #3195ff;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

export const MenuItemBtn = styled.li`
  list-style: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
  }
`;

export const MenuLink = styled(StyledLink)`
  justify-content: left;
  font-weight: bold;
  font-size: 14px;
  padding: 1rem 2rem;
  transition: all 0.2s ease;

  &:hover {
    color: #3195ff;
  }
  &:active {
    color: #3195ff;
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
  ${StyledLink};
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export const MenuItemDropDown = styled(MenuItem)`
  &:hover ${DropDownContent} {
    display: block;
  }
`;
