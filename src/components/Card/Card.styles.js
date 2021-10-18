import styled, { css } from 'styled-components';

export const StyledCardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const StyledCardBody = styled.form`
padding: 20px 32px;
`;

export const StyledCardOptions = styled.div`
display: flex;
justify-content: space-between;
`;
export const StyledCardFieldset = styled.fieldset`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
padding: 0;
margin: 0;
border: 0;

& + & {
  margin-top: 24px;
}

&:nth-last-of-type(2) {
  margin-top: 32px;
}

&:last-of-type {
  text-align: center;
}
`;

export const StyledCardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const StyledCardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;