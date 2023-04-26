import React from "react";
import useCustomTheme from "./hook/useCustomTheme";
import { ThemeProvider } from "@emotion/react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";

function AppRoutes() {
  const theme = useCustomTheme();

  const [nome, setNome] = React.useState("");
  const [saldo, setSaldo] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login
                nome={nome}
                setNome={setNome}
                saldo={saldo}
                setSaldo={setSaldo}
              />
            }
          />
          <Route path="/feira" element={<Feira />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRoutes;
