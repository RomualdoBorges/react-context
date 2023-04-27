import React from "react";
import styles from "./Carrinho.module.css";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  Snackbar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useCarrinhoContext from "hook/useCarrinhoContext";
import Produto from "components/Produto";

export default function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const { carrinho } = useCarrinhoContext();

  return (
    <main className={styles.container}>
      <IconButton className={styles.iconButton}>
        <ArrowBackIcon />
      </IconButton>
      <h2 className={styles.titulo}>Carrinho</h2>
      {carrinho.map((produto) => (
        <Produto {...produto} key={produto.id} />
      ))}
      <FormControl className={styles.pagamentoContainer}>
        <InputLabel>Forma de pagamento</InputLabel>
      </FormControl>
      <section className={styles.totalContainer}>
        <div>
          <h2>Total no carrinho: </h2>
          <span>R$ </span>
        </div>
        <div>
          <h2>Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2>Saldo total: </h2>
          <span> R$ </span>
        </div>
      </section>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setOpenSnackbar(true)}
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </Alert>
      </Snackbar>
    </main>
  );
}
