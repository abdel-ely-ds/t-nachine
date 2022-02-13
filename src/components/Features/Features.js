import {
  GridLayout,
  HeaderContainer,
  Header,
  ProductItemDescriptionContainer,
  ProductTitle,
  ProductDetails,
  Brain,
  Test,
  Optimization,
  Share,
  AsideLeft1,
  AsideLeft2,
  AsideRight1,
  AsideRight2,
} from "./Features.styles";

const Features = () => {
  return (
    <>
      <GridLayout>
        <HeaderContainer>
          <Header>Our Core Products</Header>
        </HeaderContainer>

        <AsideLeft1>
          <Brain />
          <ProductItemDescriptionContainer>
            <ProductTitle>Write it.</ProductTitle>
            <ProductDetails>
              Easily write powerful strategies in minutes, without having to
              write any line of code.
            </ProductDetails>
          </ProductItemDescriptionContainer>
        </AsideLeft1>

        <AsideRight1>
          <Test />
          <ProductItemDescriptionContainer>
            <ProductTitle>Backtest it.</ProductTitle>
            <ProductDetails>
              Get a full set of metrics to measure success in a split of a
              second.
            </ProductDetails>
          </ProductItemDescriptionContainer>
        </AsideRight1>

        <AsideLeft2>
          <Optimization />
          <ProductItemDescriptionContainer>
            <ProductTitle>Optimize it.</ProductTitle>
            <ProductDetails>
              We use artificial intelligence to improve the performance of your
              strategy.
            </ProductDetails>
          </ProductItemDescriptionContainer>
        </AsideLeft2>

        <AsideRight2>
          <Share />
          <ProductItemDescriptionContainer>
            <ProductTitle>Share it.</ProductTitle>
            <ProductDetails>
              Share you strategy with others and build your network.
            </ProductDetails>
          </ProductItemDescriptionContainer>
        </AsideRight2>
      </GridLayout>
    </>
  );
};

export default Features;
