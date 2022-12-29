import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function Main() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Home />
      <Skills />
      <Projects />
    </ThemeProvider>
  );
}

export default Main;
