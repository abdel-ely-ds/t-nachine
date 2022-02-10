import { useState, useEffect } from "react";
import { Button, Link } from "..";
import {
  BacktestMode,
  BacktestModeBtn,
  BannerContainer,
  StrategyContainer,
  RulesMenu,
  FreeTrial,
  HeroLeft,
  HeroRight,
  Title,
  TitleDetails,
  RuleItem,
  RuleHeader,
  Check,
  Signal,
  RuleItemContainer,
  Rule,
} from "./Banner.styles";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  okaidia,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippet = `
from t_nachine.backtester import Strategy
from t_nachine.risk import RiskManger
from t_nachine.candlesticks import Candle

class DummyStrategy(Strategy):
    def init(self):
        self.risk_manager = RiskManger(risk_to_reward=2.0 risk_per_trade=0.01)

    def signal(self, candle0: Candle, candle1: Candle) -> bool:
        return candle1.low < candle0.high

    def next(self):
      candle0, candle1 = get_candles(self.data, days=2)  # today and yesterday candle
      if self.signal(candle0, candle1):
          # manage risk and profit
          stop, limit, sl, tp = self.risk_manager.compute_entry_exit(
              above_price=candle0.high, below_price=candle1.low
          )
          size = self.risk_manager.shares(self.equity, stop, sl)
          self.buy(stop=stop, limit=limit, sl=sl, tp=tp, size=size)
`;

const Banner = () => {
  const [activated, setActivated] = useState(false);
  const handleClick = () => setActivated(!activated);

  return (
    <BannerContainer>
      <HeroLeft>
        <Title>
          We'll make YOU a <br /> BETTER <br /> trader
        </Title>

        <TitleDetails>
          We provide you with a set of great tools to measure the{" "}
          <b>performance</b> of your Strategy with full statistical details.{" "}
          <b>When</b> and <b>Where</b> your strategy does work
        </TitleDetails>

        <FreeTrial>
          <Link to="/signup">
            <Button primary big>
              Start backtesting for free
            </Button>
          </Link>
        </FreeTrial>
      </HeroLeft>

      <HeroRight>
        <BacktestMode>
          <BacktestModeBtn onClick={handleClick} left activated={activated}>
            Developper
          </BacktestModeBtn>
          <BacktestModeBtn onClick={handleClick} activated={!activated}>
            Not a Developper
          </BacktestModeBtn>
        </BacktestMode>
        <StrategyContainer>
          {activated ? (
            <SyntaxHighlighter language="python" style={dracula}>
              {codeSnippet}
            </SyntaxHighlighter>
          ) : (
            <>
              <RulesMenu>
                <RuleItemContainer>
                  <RuleHeader>
                    <Signal />
                    <span>Entry Signals</span>
                  </RuleHeader>
                </RuleItemContainer>

                <RuleItem>
                  <Check />
                  Uptrend
                </RuleItem>
                <RuleItem>
                  <Check />
                  MACD bullish
                </RuleItem>
                <RuleItem>
                  <Check />
                  Today's Candle bullish
                </RuleItem>
                <RuleItem>
                  <Check />
                  Today's Candle Close ABOVE Yesterady's Candle High
                </RuleItem>
                <RuleItem>
                  <Check />
                  Today's Candle Body ABOVE Moving Averages 18, 50, 200
                </RuleItem>
                <RuleItem>
                  <Check />
                  Yesterady's Candle bearish
                </RuleItem>
              </RulesMenu>

              <RulesMenu>
                <RuleHeader>
                  <Rule />
                  <span>Entry Rules</span>
                </RuleHeader>
                <RuleItem>
                  <Check />
                  <span>Entry Price: Just ABOVE Today's Candle Close</span>
                </RuleItem>
                <RuleItem>
                  <Check />
                  <span>
                    Stop Loss Price: Just BELOW Yesterady's Candle Low
                  </span>
                </RuleItem>
                <RuleItem>
                  <Check />
                  <span>Target Price: 2 times my risk</span>
                </RuleItem>
                <RuleItem>
                  <Check />
                  <span>Order: Buy</span>
                </RuleItem>
              </RulesMenu>
            </>
          )}
        </StrategyContainer>
      </HeroRight>
    </BannerContainer>
  );
};

export default Banner;
