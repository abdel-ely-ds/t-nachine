import React from 'react';
import { StyledCardWrapper } from "./Card.styles";

const CardWrapper = ({ children, ...props }) => {
    return (
        <StyledCardWrapper {...props}>
            {children}
        </StyledCardWrapper>
    )
}

export default CardWrapper;
