import React from 'react';
import { StyledCardOptions } from "./Card.styles";

const CardOptions = ({ children, ...props }) => {
    return (
        <StyledCardOptions {...props}>
            {children}
        </StyledCardOptions>
    )
}

export default CardOptions;
