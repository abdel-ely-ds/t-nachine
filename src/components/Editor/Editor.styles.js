import styled from "styled-components";

export const PlaygroundContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-left: 95px;
  padding-right: 95px;
`;

export const PlaygroundHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-left: 75px;
  padding-right: 75px;
`;

export const PlaygroundTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 600px;
`;

export const PlaygroundOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PlaygroundHeaderItemWrapper = styled.div`
  padding: 1rem 2rem;
`;

export const EditorContainer = styled.div`
  border: solid;
  border-color: rgb(48, 13, 79);
  border-width: 1px;
  border-radius: 0px;
  width: 65vw;
  height: 70vh;
`;

export const ResultsContainer = styled.div`
  position: relative;
  height: 70vh;
  width: 35vw;
  margin-left: 10px;
`;

export const ResultsTitle = styled.span`
  font-size: 3vh;
  font-weight: 500;
  color: White;
  background-color: rgb(48, 13, 79);
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  padding-top: 10px;
  padding-left: 95px;
`;
