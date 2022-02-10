import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: ${({ special }) => (special ? "6px" : "50px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  padding: ${({ big }) => (big ? "12px 16px" : "8px 12px")};
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: ${({ primary, special }) =>
    primary || special ? "#3b62e5" : "#fff"};
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#3898ec" : "#fff")};
    color: ${({ primary }) => (primary ? "#fff" : "#3195ff")};
  }
`;
