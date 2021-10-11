import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { Button } from '../../Globalstyles';
import {
    AnalysisIcon, ArrowDown, ArrowUp, BacktestIcon, DocsIcon, DropDownContent, Menu, MenuItem, MenuItemBtn, MenuItemDropDown, MenuLink, MenuLinkBtn, Nav,
    NavbarContainer, NavLogo, OptimizationIcon, PricingIcon, ServicesIcon
} from './Navbar.styles';



const Navbar = () => {
    const [ServiceIsHovered, setServiceIsHovered] = useState(false);
    const [DocIsHovered, setDocIsHovered] = useState(false);

    return (
        <div>
            <IconContext.Provider value={{ color: '#000' }}>
                <Nav>
                    <NavbarContainer>

                        <NavLogo to="/">
                            T-Nachine
                        </NavLogo>

                        <Menu>

                            <MenuItemDropDown
                                onMouseEnter={() => setServiceIsHovered(true)}
                                onMouseLeave={() => setServiceIsHovered(false)}>
                                <MenuItem>

                                    <MenuLink to="/services"><ServicesIcon />
                                        Services
                                        {ServiceIsHovered ? (<ArrowUp />) : (<ArrowDown />)}
                                    </MenuLink>

                                </MenuItem>
                                <DropDownContent>
                                    <MenuLink to="/"><BacktestIcon />Backtesting</MenuLink>
                                    <MenuLink to="/"><AnalysisIcon />Extensive Analysis</MenuLink>
                                    <MenuLink to="/"><OptimizationIcon />Optimization</MenuLink>
                                </DropDownContent>
                            </MenuItemDropDown>

                            <MenuItemDropDown
                                onMouseEnter={() => setDocIsHovered(true)} onMouseLeave={() => setDocIsHovered(false)}>
                                <MenuItem>
                                    <MenuLink to="/"><DocsIcon />
                                        Documentation
                                        {DocIsHovered ? (<ArrowUp />) : (<ArrowDown />)}
                                    </MenuLink>
                                </MenuItem>
                                <DropDownContent>
                                    <MenuLink to="/"><BacktestIcon />Write Your Custom Strategy</MenuLink>
                                    <MenuLink to="/"><AnalysisIcon />Declare Your Custom Indicators</MenuLink>
                                </DropDownContent>
                            </MenuItemDropDown>



                            <MenuItem>
                                <MenuLink to="/pricing"><PricingIcon />Princing</MenuLink>
                            </MenuItem>

                        </Menu>

                        <Menu>

                            <MenuItemBtn>
                                <MenuLinkBtn to="/login">
                                    <Button>Log in</Button>
                                </MenuLinkBtn>
                            </MenuItemBtn>

                            <MenuItemBtn>
                                <MenuLinkBtn to="/signup">
                                    <Button primary>Sign up</Button>
                                </MenuLinkBtn>
                            </MenuItemBtn>

                        </Menu>

                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </div >
    )
}

export default Navbar;