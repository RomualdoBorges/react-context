import React from "react";
import useCustomTheme from "./hook/useCustomTheme";
import { ThemeProvider } from "@emotion/react";
import Carrinho from "pages/Carrinho";
// import Login from "./pages/Login";

function App() {
  const theme = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* <Login /> */}
      <Carrinho />
    </ThemeProvider>
  );
}

export default App;
