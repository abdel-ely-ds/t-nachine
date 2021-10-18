import React from 'react';
import { StyledCardBody } from "./Card.styles";

const CardBody = ({ children, ...props }) => {
    return (
        <StyledCardBody {...props}>
            {children}
        </StyledCardBody>
    )
}

export default CardBody;