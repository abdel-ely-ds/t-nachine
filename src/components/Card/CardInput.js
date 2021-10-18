import React, { forwardRef } from 'react';
import { StyledCardInput } from "./Card.styles";


const CardInput = forwardRef(({ children, ...props }, ref) => {
    return (
        <StyledCardInput {...props} ref={ref}>
            {children}
        </StyledCardInput>
    )
})

export default CardInput;
