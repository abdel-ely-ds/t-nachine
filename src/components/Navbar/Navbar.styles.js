import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
import { GiPriceTag } from "react-icons/gi";
import { GrOptimize, GrServices, GrTest } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../Globalstyles';

export const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};
`;

export const NavLogo = styled(Link)`
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 20px;
font-weight: 800;
transition: all .5s ease;
&:hover{
    color: #3195ff;
}
`;

export const ServicesIcon = styled(GrServices)`
margin-right: .8rem;
`;

export const OptimizationIcon = styled(GrOptimize)`
margin-right: .8rem;
padding: 0px;
`;

export const BacktestIcon = styled(GrTest)`
margin-right: .8rem;
`;

export const AnalysisIcon = styled(SiSimpleanalytics)`
margin-right: .8rem;
`;


export const ArrowDown = styled(AiOutlineDown)`
margin-left: 0.4rem;
`;

export const ArrowUp = styled(AiOutlineUp)`
margin-left: 0.4rem;
`;

export const DocsIcon = styled(FcDocument)`
margin-right: .8rem;
`;

export const PricingIcon = styled(GiPriceTag)`
margin-right: .8rem;
`;

export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
}
`;

export const Menu = styled.ul`
display: flex;
justify-content: center;

@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 14px;
display: ${({ inDropDown }) => inDropDown ? 'inline-block' : 'flex'};
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .2s ease;

&:hover {
    color: #3195ff;

}
&:active {
    transform: traslateY(3rem);
    color: #3195ff;
}

@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;

export const MenuLinkBtn = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 2px;
height: 100%;
width: 100%;
border: none;
outline: none;

`;


export const MenuItem = styled.li`
list-style: none;
height: 80px;
align-items: center;
@media only screen and (max-width:1000px){
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
padding: 0px;
margin: 0px;
`;

export const MenuItemDropDown = styled(MenuItem)`
&:hover ${DropDownContent} {
    display: inline-block;
}
`;
