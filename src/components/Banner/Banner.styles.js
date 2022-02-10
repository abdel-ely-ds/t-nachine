import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcCandleSticks } from "react-icons/fc";
import { GiPencilRuler } from "react-icons/gi";
export const BannerContainer = styled.div`
  margin: 0px;
  display: flex;
  padding: 100px 100px 0px;
  margin-bottom: 100px;
  height: 90vh;
`;

export const HeroLeft = styled.div`
  float: left;
  display: block;
  width: 50%;
  padding-right: 5px;
  padding-left: 5px;
  margin-right: 30px;
  height: 100%;
  margin-top: 60px;
`;

export const HeroRight = styled.div`
  float: right;
  display: block;
  width: 50%;
  max-height: 90%;
  padding: 10px;
  background-color: rgb(40, 42, 54);
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 80px;
  line-height: 100px;
  letter-spacing: 0.5px;
  font-weight: 600px;
  display: block;
  text-align: center;
`;

export const TitleDetails = styled.p`
  font-weight: 100px;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 0.25px;
  margin-top: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

export const FreeTrial = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const BacktestMode = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 24px 16px;
  margin: 0px;
`;

export const BacktestModeBtn = styled.button`
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
`;

export const CodeSampleName = styled.p`
  background-color: rgb(45, 48, 49);
  padding: 2px 10px;
  color: #fff;
  border-radius: 6px 6px 0px 0px;
`;

export const StrategyContainer = styled.div`
  display: block;
  padding: 5px 24px 16px;
  margin: 0px;
  color: white;
`;

export const RulesMenu = styled.ul`
  display: block;
  justify-content: left;
`;

export const RuleItem = styled.li`
  list-style: none;
  align-items: center;
  margin: 16px 30px;
  font-weight: bold;
`;

export const RuleItemContainer = styled.div`
  display: flex;
`;

export const RuleHeader = styled.h1`
  color: #f7b42c;
  font: 60px;
  font-weight: 900px;
`;

export const Check = styled(BsFillCheckCircleFill)`
  margin-right: 20px;
  margin-left: 20px;
  color: rgb(114, 255, 114);
  font-size: 25px;
  vertical-align: bottom;
`;

export const Signal = styled(FcCandleSticks)`
  margin-right: 20px;
  font-size: 60px;
  vertical-align: bottom;
`;

export const Rule = styled(GiPencilRuler)`
  margin-top: 15px;
  margin-right: 30px;
  font-size: 50px;
  vertical-align: bottom;
`;
