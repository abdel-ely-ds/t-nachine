import React from "react";
import styled from "styled-components";
import { SiMusicbrainz } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiSimpleanalytics } from "react-icons/si";
import { SiSlideshare } from "react-icons/si";

export const GridLayout = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-areas:
    "header header"
    "asideLeft1  asideRight1"
    "asideLeft2 asideRight2";
  grid-template-rows: 2fr 4fr 4fr;
  grid-template-columns: 1fr 1fr;
  padding-left: 110px;
  padding-right: 110px;
  background: blue;
  @media only screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    background: blue;
    grid-template-areas:
      "header"
      "asideLeft1"
      "asideRight1"
      "asideLeft2"
      "asideRight2";
    grid-template-columns: 1fr;
  }
`;

export const AsideLeft1 = styled.aside`
  grid-area: asideLeft1;
  display: flex;
  align-items: center;
`;

export const AsideLeft2 = styled.aside`
  grid-area: asideLeft2;
  display: flex;
  align-items: center;
`;
export const AsideRight1 = styled.aside`
  grid-area: asideRight1;
  display: flex;
  align-items: center;
`;
export const AsideRight2 = styled.aside`
  grid-area: asideRight2;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  grid-area: header;
  background: blue;
  vertical-align: middle;
`;
export const Header = styled.h1`
  font-size: 70px;
  letter-spacing: 0.5px;
  font-weight: 600px;
  color: white;
  @media only screen and (max-width: 500px) {
    font-size: 30px;
    letter-spacing: 0.5px;
    font-weight: 400px;
  }
`;

export const ProductItemDescriptionContainer = styled.div`
  margin: 0px;
  padding-left: 30px;
  display: block;
  align-text: left;
  color: white;
  width: 70%;
  @media only screen and (max-width: 500px) {
    padding-left: 20px;
    width: 100%;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export const ProductDetails = styled.p`
  font-size: 20px;
  color: rgb(255, 188, 35);
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Brain = styled(SiMusicbrainz)`
  padding: 0px;
  color: white;
  font-size: 120px;
  border-radius: 50%;
  @media only screen and (max-width: 500px) {
    font-size: 90px;
  }
`;

export const Optimization = styled(GiArtificialIntelligence)`
  padding: 0px;
  font-size: 120px;
  color: white;
  border-radius: 30px;
  @media only screen and (max-width: 500px) {
    font-size: 90px;
  }
`;

export const Test = styled(SiSimpleanalytics)`
  padding: 0px;
  font-size: 120px;
  border-radius: 20px;
  color: white;
  @media only screen and (max-width: 500px) {
    font-size: 90px;
    border-radius: 25px;
  }
`;

export const Share = styled(SiSlideshare)`
  font-size: 120px;
  color: white;
  border-radius: 30px;
  @media only screen and (max-width: 500px) {
    font-size: 90px;
    border-radius: 25px;
  }
`;
