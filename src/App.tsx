import { ThemeProvider } from "styled-components";
import { Portfolio } from "./pages/Portfolio";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
