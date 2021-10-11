import styled from 'styled-components';

export const BannerContainer = styled.div`
margin: 0px;
display: flex;
padding: 100px 100px 0px;
`;

export const HeroLeft = styled.div`
float: left;
display: block;
width: 50%;
padding-right: 5px;
padding-left: 5px;
margin-right: 30px;
`;

export const HeroRight = styled.div`
float: right;
display: block;
width: 50%;
max-height: 90%;
padding: 10px;
background-color: rgb(45, 48, 62);
border-radius: 10px;

`;


export const Title = styled.h1`
font-size: 40px;
line-height: 44px;
letter-spacing: 0.5px;
font-weight: 600px;
display: block;
`;

export const TitleDetails = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 28px;
letter-spacing: 0.25px;
margin-top: 24px;
margin-bottom: 16px;
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
font-weight: 600px;
padding: 12px 16px;
width: calc(50%);
outline: none;
border: none;
transition: all 0.1s ease 0s;
border-radius:  ${({ left }) => left ? '6px 0px 0px 6px' : '0px 6px 6px 0px'};
background-color: ${({ activated }) => activated ? 'rgb(45, 48, 49)' : ' rgb(45, 48, 30)'};

&:hover{
    background-color: ${({ activated }) => activated ? 'rgb(45, 48, 49)' : 'rgb(194, 35, 206)'}; 
}
`;


export const CodeSampleContainer = styled.div`
display: block;
padding: 5px 24px 16px;
margin: 0px;
`;

export const CodeSampleName = styled.p`
background-color: rgb(45, 48, 49);
padding: 2px 10px;
color: #fff;
border-radius: 6px 6px 0px 0px;
`;