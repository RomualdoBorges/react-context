import React from "react";
import styles from "./Carrinho.module.css";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useCarrinhoContext from "hook/useCarrinhoContext";
import Produto from "components/Produto";
import { useNavigate } from "react-router-dom";
import { usePagamentoContext } from "hook/usePagamentoContext";

export default function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const { carrinho } = useCarrinhoContext();
  const { formaPagamento, mudarFormaPagamento, tiposPagamento } =
    usePagamentoContext();
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <IconButton
        className={styles.iconButton}
        onClick={() => navigate("/feira")}
      >
        <ArrowBackIcon />
      </IconButton>

      <h2 className={styles.titulo}>Carrinho</h2>
      {carrinho.map((produto) => (
        <Produto {...produto} key={produto.id} />
      ))}
      <FormControl className={styles.pagamentoContainer}>
        <InputLabel>Forma de pagamento</InputLabel>
        <Select
          variant="standard"
          value={formaPagamento.id}
          onChange={(event) => mudarFormaPagamento(event.target.value)}
        >
          {tiposPagamento.map((pagamento) => (
            <MenuItem value={pagamento.id} key={pagamento.id}>
              {pagamento.nome}
            </MenuItem>
          ))}
        </Select>
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
