import React from "react";
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCarrinhoContext from "hook/useCarrinhoContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { quantidadeProdutos } = useCarrinhoContext();
  const navegar = useNavigate();

  return (
    <nav className={styles.nav}>
      <Logo />
      <IconButton
        disabled={quantidadeProdutos === 0}
        onClick={() => navegar("/carrinho")}
      >
        <Badge color="primary" badgeContent={quantidadeProdutos}></Badge>
        <ShoppingCartIcon />
      </IconButton>
    </nav>
  );
}
