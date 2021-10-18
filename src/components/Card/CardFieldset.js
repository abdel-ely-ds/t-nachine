import React from 'react';
import { StyledCardFieldset } from "./Card.styles";

const CardFieldset = ({ children, ...props }) => {
    return (
        <StyledCardFieldset {...props}>
            {children}
        </StyledCardFieldset>
    )
}

export default CardFieldset;
