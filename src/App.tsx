
import { Routes } from "./routes";

import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";
import * as styled from 'styled-components';




function App() {
  return (
    <styled.ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      </styled.ThemeProvider>
  );
}

export default App;
