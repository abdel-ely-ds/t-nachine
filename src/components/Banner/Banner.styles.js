import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcCandleSticks } from "react-icons/fc";
import { GiPencilRuler } from "react-icons/gi";

export const GridLayout = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-areas:
    "navbar navbar"
    "leftHero rightHero"
    "leftHero rightHero";
  grid-template-rows: 1fr 7fr 7fr;
  grid-template-columns: 1fr 1fr;
  padding: 0px 110px 100px;
  @media only screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
    grid-template-areas:
      "leftHero"
      "leftHero"
      "leftHero"
      "rightHero"
      "rightHero";
    grid-template-columns: 1fr;
  }
`;

export const LeftHeroContainer = styled.aside`
  grid-area: leftHero;
  display: block;
  align-items: center;
`;

export const RightHeroContainer = styled.aside`
  grid-area: rightHero;
  display: block;
  align-items: center;
  background-color: rgb(40, 42, 54);
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const HeaderContainer = styled.div`
  padding-bottom: 10px;
  text-align: center;
`;
export const Header = styled.h1`
  font-size: 80px;
  line-height: 100px;
  letter-spacing: 0.5px;
  font-weight: 600px;
  display: block;
  @media only screen and (max-width: 500px) {
    font-size: 60px;
    line-height: 80px;
  }
`;

export const DetailsContainer = styled.div`
  padding-bottom: 30px;
  vertical-align: middle;
  text-align: center;
`;

export const Details = styled.p`
  font-weight: 400px;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 0.25px;
  @media only screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const FreeTrialButtonContainer = styled.div`
  padding-bottom: 10px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
`;

export const BacktestModeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 24px 10px;
  margin: 0px;
  @media only screen and (max-width: 500px) {
    padding: 15px 15px 5px;
  }
`;

export const BacktestMode = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 16px;
  width: calc(50%);
  outline: none;
  border: none;
  transition: all 0.1s ease 0s;

  border-radius: ${({ left }) =>
    left ? "6px 0px 0px 6px" : "0px 6px 6px 0px"};
  background-color: ${({ activated }) =>
    activated ? "rgb(45, 48, 49)" : " rgb(45, 48, 30)"};

  &:hover {
    background-color: ${({ activated }) =>
      activated ? "rgb(45, 48, 49)" : "rgb(194, 35, 206)"};
  }
  @media only screen and (max-width: 500px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`;

export const StrategyContainer = styled.div`
  display: block;
  padding: 5px 24px 10px;
  @media only screen and (max-width: 500px) {
    padding: 5px 10px 5px;
  }
`;

export const RulesContainer = styled.div`
  display: block;
  padding: 10px;
  @media only screen and (max-width: 500px) {
    padding: 0px;
  }
`;

export const RuleHeader = styled.h1`
  color: #f7b42c;
  font-size: 35px;
  font-weight: 900px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const RuleDescription = styled.span`
  color: white;
  font-size: 1.6rem;
  line-height: 1.6px;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 1.2rem;
    line-height: 1.2px;
  }
`;
export const SignalIcon = styled(FcCandleSticks)`
  margin-right: 20px;
  font-size: 60px;
  @media only screen and (max-width: 500px) {
    font-size: 35px;
  }
`;

export const RulesMenu = styled.ul`
  display: block;
  justify-content: left;
`;

export const RuleItem = styled.li`
  margin: 16px 30px;
  color: white;
  font-weight: bold;
  list-style: none;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 500px) {
    margin: 10px 12px;
  }
`;

export const CheckIcon = styled(BsFillCheckCircleFill)`
  margin-right: 20px;
  margin-left: 20px;
  color: rgb(114, 255, 114);
  font-size: 25px;
  @media only screen and (max-width: 500px) {
    margin-right: 10px;
    margin-left: 0px;
    font-size: 18px;
  }
`;

export const RuleIcon = styled(GiPencilRuler)`
  margin-right: 20px;
  font-size: 50px;
  @media only screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
