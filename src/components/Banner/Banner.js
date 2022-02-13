import { useState, useEffect } from "react";
import { Button, Link } from "..";

import {
  GridLayout,
  LeftHeroContainer,
  RightHeroContainer,
  HeaderContainer,
  DetailsContainer,
  FreeTrialButtonContainer,
  BacktestModeContainer,
  BacktestMode,
  StrategyContainer,
  RulesContainer,
  RuleDescription,
  RuleHeader,
  Header,
  Details,
  SignalIcon,
  CheckIcon,
  RuleIcon,
  RuleItem,
} from "./Banner.styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { fontSize } from "@mui/system";

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
    <>
      <GridLayout>
        <LeftHeroContainer>
          <HeaderContainer>
            <Header>
              We'll make YOU a <br /> BETTER <br /> trader
            </Header>
          </HeaderContainer>
          <DetailsContainer>
            <Details>
              We provide you with a set of great tools to measure the
              <b> performance</b> of your Strategy with full statistical
              details.
              <b>When</b> and <b>Where</b> your strategy does work.
            </Details>
          </DetailsContainer>
          <FreeTrialButtonContainer>
            <Link to="/signup">
              <Button primary big>
                <b>Start backtesting for free</b>
              </Button>
            </Link>
          </FreeTrialButtonContainer>
        </LeftHeroContainer>

        <RightHeroContainer>
          <BacktestModeContainer>
            <BacktestMode onClick={handleClick} left activated={activated}>
              Developper
            </BacktestMode>
            <BacktestMode onClick={handleClick} activated={!activated}>
              Not a Developper
            </BacktestMode>
          </BacktestModeContainer>
          <StrategyContainer>
            {activated ? (
              <SyntaxHighlighter
                language="python"
                style={dracula}
                customStyle={{
                  lineHeight: "1.5",
                  fontSize: "1em",
                  background: "rgb(48, 13, 79)",
                }}
                codeTagProps={{
                  style: {
                    lineHeight: "inherit",
                    fontSize: "inherit",
                    background: "inherit",
                    fontFamily: "inherit",
                  },
                }}
              >
                {codeSnippet}
              </SyntaxHighlighter>
            ) : (
              <>
                <RulesContainer>
                  <RuleHeader>
                    <SignalIcon />
                    <span>Entry Signals</span>
                  </RuleHeader>

                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>Uptrend</RuleDescription>
                  </RuleItem>

                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>MACD bullish</RuleDescription>
                  </RuleItem>
                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>Today's Candle bullish</RuleDescription>
                  </RuleItem>
                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>
                      Today's Candle Close ABOVE Yesterady's Candle High
                    </RuleDescription>
                  </RuleItem>
                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>
                      Today's Candle Body ABOVE Moving Averages 18, 50, 200
                    </RuleDescription>
                  </RuleItem>
                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>
                      Yesterady's Candle bearish
                    </RuleDescription>
                  </RuleItem>
                </RulesContainer>

                <RulesContainer>
                  <RuleHeader>
                    <RuleIcon />
                    <span>Entry Rules</span>
                  </RuleHeader>

                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>
                      Entry Price: Just ABOVE Today's Candle Close
                    </RuleDescription>
                  </RuleItem>
                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>
                      Stop Loss Price: Just BELOW Yesterady's Candle Low
                    </RuleDescription>
                  </RuleItem>
                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>
                      Target Price: 2 times my risk
                    </RuleDescription>
                  </RuleItem>
                  <RuleItem>
                    <CheckIcon />
                    <RuleDescription>Order: Buy</RuleDescription>
                  </RuleItem>
                </RulesContainer>
              </>
            )}
          </StrategyContainer>
        </RightHeroContainer>
      </GridLayout>
    </>
  );
};

export default Banner;
