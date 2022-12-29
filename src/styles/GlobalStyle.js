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

`;

export default GlobalStyle;
