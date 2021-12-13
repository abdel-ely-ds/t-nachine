import styled from "styled-components";

export const PlaygroundContainer = styled.div`
  margin: 0px;
  display: flex;
`;

export const PlaygroundHeader = styled.div`
  padding-left: 50px;
  padding-right: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const PlaygroundTitle = styled.h1`
  font-size: 20px;
  font-weight: 600px;
`;

export const PlaygroundOptions = styled.div`
  display: block;
  justify-content: space-between;
`;

export const EditorContainer = styled.div`
  margin-bottom: 10px;
  border: solid;
  border-color: rgb(48, 13, 79);
  border-width: 1px;
  border-radius: 3px;
  width: 100%;
`;

export const HeroRight = styled.div`
  float: right;
  display: block;
  width: 30%;
  padding-left: 10px;
  padding-right: 60px;
  align-items: center;
`;

export const HeroLeft = styled.div`
  float: left;
  display: block;
  width: 70%;
  padding-left: 50px;
`;

export const ResultsContainer = styled.div`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const ResultsHeader = styled.span`
  dispaly: block;
  font-size: 22px;
  font-weight: 500;
  color: White;
  background-color: rgb(48, 13, 79);
  padding: 7px;
  padding-left: 12px;
  padding-right: 12px;
`;
