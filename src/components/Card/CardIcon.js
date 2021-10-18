import React from 'react';
import { StyledCardIcon } from "./Card.styles";

const CardIcon = ({ children, ...props }) => {
    return (
        <StyledCardIcon {...props}>
            {children}
        </StyledCardIcon>
    )
}

export default CardIcon;
