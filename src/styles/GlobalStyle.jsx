import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  background-color: ${(props) => props.theme.background};
}
*, *:before, *:after {
  box-sizing: inherit;
}

h2 {
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.theme.title};
}

`;

export default GlobalStyle;
