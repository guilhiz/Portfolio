import React from "react";
import "reset-css";
import GlobalStyle from "../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme";
import Home from "./components/Home";

// import { Container } from './styles';

function Main() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default Main;
