import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { lightTheme } from "../theme";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
