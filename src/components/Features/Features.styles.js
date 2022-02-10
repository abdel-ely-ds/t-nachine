import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcCandleSticks } from "react-icons/fc";
import { GiPencilRuler } from "react-icons/gi";
import { SiMusicbrainz } from "react-icons/si";
import { SiSimpleanalytics } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiSlideshare } from "react-icons/si";

export const FeaturesContainer = styled.div`
  margin: 0px;
  background: #004daa;
  height: 100vh;
  display: block;
`;
export const HeaderContainer = styled.div`
  align-text: center;
  padding-left: 110px;
  padding-top: 20px;
  text-align: left;
  vertical-align: middle;
`;
export const Header = styled.h1`
  font-size: 80px;
  letter-spacing: 0.5px;
  font-weight: 600px;
  color: white;
`;

export const ProductItemContainer = styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

export const ProductItemDescription = styled.div`
  margin: 0px;
  display: block;
  padding-left: 60px;
  align-text: left;
  color: white;
  width: 50%;
`;

export const ProductTitle = styled.h1`
  font-size: 40px;
  text-align: left;
  color: white;
  font-weight: bold;
`;
export const ProductTitleDetails = styled.p`
  font-size: 20px;
  margin-bottom: 16px;
  text-align: left;
  color: rgb(255, 188, 35);
  font-weight: bold;
`;

export const Brain = styled(SiMusicbrainz)`
  margin-left: 10px;
  color: white;
  font-size: 120px;
  vertical-align: center;
  border-radius: 50%;
`;

export const Test = styled(SiSimpleanalytics)`
  margin-left: 10px;
  font-size: 120px;
  vertical-align: center;
  border-radius: 30px;
  color: white;
`;

export const Optimization = styled(GiArtificialIntelligence)`
  margin-left: 10px;
  font-size: 120px;
  vertical-align: center;
  color: white;
  border-radius: 30px;
`;

export const Share = styled(SiSlideshare)`
  margin-left: 10px;
  font-size: 120px;
  vertical-align: center;
  color: white;
  border-radius: 30px;
`;
