import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

`;

export default GlobalStyle;
