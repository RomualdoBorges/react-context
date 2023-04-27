import React from "react";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import styles from "./Pages.module.css";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "common/context/Usuario";

export default function Login() {
  const history = useNavigate();
  const { nome, setNome, saldo, setSaldo } = React.useContext(UsuarioContext);

  return (
    <div className={styles.container}>
      <h2>Insira o seu nome</h2>
      <FormControl style={{ marginBottom: "30px" }}>
        <InputLabel>Nome</InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </FormControl>
      <FormControl style={{ marginBottom: "30px" }}>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          value={saldo}
          onChange={(event) => setSaldo(event.target.value)}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length < 3}
        onClick={() => {
          history("/feira");
        }}
      >
        Avançar
      </Button>
    </div>
  );
}
