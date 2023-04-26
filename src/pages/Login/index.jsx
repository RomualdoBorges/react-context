import React from "react";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import styles from "./Pages.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <h2>Insira o seu nome</h2>
      <FormControl className={styles.input}>
        <InputLabel>Nome</InputLabel>
        <Input type="text" />
      </FormControl>
      <FormControl className={styles.input}>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </FormControl>
      <Button variant="contained" color="primary">
        Avançar
      </Button>
    </div>
  );
}
