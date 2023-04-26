import React from "react";
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <IconButton>
        <Badge color="primary"></Badge>
        <ShoppingCartIcon />
      </IconButton>
    </nav>
  );
}
