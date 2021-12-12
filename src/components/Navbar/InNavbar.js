import { useState } from "react";
import { IconContext } from "react-icons";
import { useHistory } from "react-router";
import { Button } from "..";
import { useAuth } from "../../contexts/AuthContext";
import {
  AnalysisIcon,
  ArrowDown,
  ArrowUp,
  BacktestIcon,
  DocsIcon,
  OptimizationIcon,
  PricingIcon,
  ServicesIcon,
} from "../Icons/Icons";
import {
  DropDownContent,
  Menu,
  MenuItem,
  MenuItemBtn,
  MenuItemDropDown,
  MenuLink,
  Nav,
  NavbarContainer,
  NavLogo,
} from "./Navbar.styles";

const InNavbar = () => {
  const [ServiceIsHovered, setServiceIsHovered] = useState(false);
  const [DocIsHovered, setDocIsHovered] = useState(false);
  const { logout } = useAuth();
  const history = useHistory();

  function handleClick() {
    logout();
    history.push("/");
  }

  return (
    <div>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">T-Nachine</NavLogo>

            <Menu>
              <MenuItemDropDown
                onMouseEnter={() => setServiceIsHovered(true)}
                onMouseLeave={() => setServiceIsHovered(false)}
              >
                <MenuItem>
                  <MenuLink to="/services">
                    <ServicesIcon />
                    Services
                    {ServiceIsHovered ? <ArrowUp /> : <ArrowDown />}
                  </MenuLink>
                </MenuItem>
                <DropDownContent>
                  <MenuLink to="/backtest">
                    <BacktestIcon />
                    Backtesting
                  </MenuLink>
                  <MenuLink to="/">
                    <AnalysisIcon />
                    Extensive Analysis
                  </MenuLink>
                  <MenuLink to="/">
                    <OptimizationIcon />
                    Optimization
                  </MenuLink>
                </DropDownContent>
              </MenuItemDropDown>

              <MenuItemDropDown
                onMouseEnter={() => setDocIsHovered(true)}
                onMouseLeave={() => setDocIsHovered(false)}
              >
                <MenuItem>
                  <MenuLink to="/">
                    <DocsIcon />
                    Documentation
                    {DocIsHovered ? <ArrowUp /> : <ArrowDown />}
                  </MenuLink>
                </MenuItem>
                <DropDownContent>
                  <MenuLink to="/">Write Your Custom Strategy</MenuLink>
                  <MenuLink to="/">Declare Your Custom Indicators</MenuLink>
                </DropDownContent>
              </MenuItemDropDown>

              <MenuItem>
                <MenuLink to="/pricing">
                  <PricingIcon />
                  Pricing
                </MenuLink>
              </MenuItem>
            </Menu>

            <Menu>
              <MenuItemBtn>
                <Button onClick={handleClick}>Log out</Button>
              </MenuItemBtn>
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};
export default InNavbar;
