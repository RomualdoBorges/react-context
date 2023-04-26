import React from "react";
import useCustomTheme from "./hook/useCustomTheme";
import { ThemeProvider } from "@emotion/react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { UsuarioProvider } from "common/context/Usuario";

function AppRoutes() {
  const theme = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <UsuarioProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/feira" element={<Feira />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </BrowserRouter>
      </UsuarioProvider>
    </ThemeProvider>
  );
}

export default AppRoutes;
