import styled from "styled-components";

export const PlaygroundContainer = styled.div`
  margin: 0px;
  display: flex;
`;

export const PlaygroundHeader = styled.div`
  padding-left: 50px;
  padding-right: 60px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlaygroundTitle = styled.h1`
  font-size: 20px;
  font-weight: 600px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: 50%;
  padding-left: 50px;
  overflow: hidden;
`;

export const ResultsContainer = styled.div`
  margin-top: 10px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
