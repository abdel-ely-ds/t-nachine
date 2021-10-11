import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Lato', sans-serif;
    font-weight: 200;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #fff;
    color: rgb(48, 13, 79);

}
`;

export default GlobalStyles;

export const Container = styled.div`
margin: 0px;
padding: 0;
max-width: 1300px;
width: 100%;

@media (max-width:400px){
    padding: 0 10px;
}
@media (max-width:991px) {
    padding: 0 30px;
}

@media (min-width: 1500px) {
    max-width: 1500px;
}

@media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
}
`;

export const Button = styled.button`
border-radius: 50px;
color: ${({ primary }) => primary ? '#fff' : '#000'};
padding: ${({ big }) => big ? '12px 16px' : '8px 12px'};
font-size: 16px;
outline: none;
cursor: pointer;
border: none;
background-color: ${({ primary }) => primary ? '#007afc' : '#fff'}; 
transition: all .5s ease;

&:hover{
    background-color: ${({ primary }) => primary ? '#3898ec' : '#fff'}; 
}
`;
<GlobalStyles />