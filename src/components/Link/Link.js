import React from 'react';
import { StyledLink } from './Link.styles';
const Link = ({ children, ...props }) => {
    return (
        <StyledLink to={props.to}>
            {children}
        </StyledLink>
    )
}

export default Link;
