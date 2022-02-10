import {
  Header,
  FeaturesContainer,
  HeaderContainer,
  ProductItemContainer,
  ProductItemDescription,
  ProductTitle,
  Brain,
  Test,
  Optimization,
  Share,
  ProductTitleDetails,
} from "./Features.styles";

import strategy from "../../assets/strategy.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Features = () => {
  return (
    <>
      <FeaturesContainer>
        <HeaderContainer>
          <Header>Our Core Products</Header>
        </HeaderContainer>

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={10}>
          <ProductItemContainer>
            <Brain />
            <ProductItemDescription>
              <ProductTitle>Write it.</ProductTitle>
              <ProductTitleDetails>
                Easily write powerful strategies in minutes, without having to
                write any line of code.
              </ProductTitleDetails>
            </ProductItemDescription>
          </ProductItemContainer>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={20}>
          <ProductItemContainer>
            <Test />
            <ProductItemDescription>
              <ProductTitle>Backtest it.</ProductTitle>
              <ProductTitleDetails>
                Get a full set of metrics to measure success in a split of a
                second.
              </ProductTitleDetails>
            </ProductItemDescription>
          </ProductItemContainer>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={20}>
          <ProductItemContainer>
            <Optimization />
            <ProductItemDescription>
              <ProductTitle>Optmize it.</ProductTitle>
              <ProductTitleDetails>
                We use artificial intelligence to improve the performance of
                your strategy.
              </ProductTitleDetails>
            </ProductItemDescription>
          </ProductItemContainer>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={20}>
          <ProductItemContainer>
            <Share />
            <ProductItemDescription>
              <ProductTitle>Share it.</ProductTitle>
              <ProductTitleDetails>
                Share you strategy with others and build your network.
              </ProductTitleDetails>
            </ProductItemDescription>
          </ProductItemContainer>
        </ScrollAnimation>
      </FeaturesContainer>
    </>
  );
};

export default Features;
