import { useState } from 'react';
import { Button, Link } from '..';
import {
    BacktestMode, BacktestModeBtn, BannerContainer,
    CodeSampleContainer, CodeSampleName, FreeTrial, HeroLeft, HeroRight, Title, TitleDetails
} from "./Banner.styles";

const Banner = () => {

    const [activated, setActivated] = useState(true);
    const handleClick = () => setActivated(!activated);

    return (
        <BannerContainer>
            <HeroLeft>

                <Title>
                    Backtesting framework for everyone
                </Title>

                <TitleDetails>
                    Well documented APIs that are easy to use. Provide full details about your strategy
                    with all necessary stats
                </TitleDetails>

                <FreeTrial>

                    <Link to="/signup">
                        <Button primary big>Start backtesting for free</Button>
                    </Link>

                </FreeTrial>

            </HeroLeft>

            <HeroRight>

                <BacktestMode>
                    <BacktestModeBtn onClick={handleClick} left activated={activated}>Developper</BacktestModeBtn>
                    <BacktestModeBtn onClick={handleClick} activated={!activated}>Not a Developper</BacktestModeBtn>
                </BacktestMode>

                <CodeSampleContainer>
                    <CodeSampleName>
                        Example of a strategy
                    </CodeSampleName>
                </CodeSampleContainer>

            </HeroRight>
        </BannerContainer >
    )
}

export default Banner;