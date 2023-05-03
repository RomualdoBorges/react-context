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
import { UsuarioContext } from "common/context/Usuario";

export default function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const { carrinho, valorTotalCarrinho, efetuarCompra } = useCarrinhoContext();
  const { saldo = 0 } = React.useContext(UsuarioContext);
  const { formaPagamento, mudarFormaPagamento, tiposPagamento } =
    usePagamentoContext();
  const navigate = useNavigate();
  const total = React.useMemo(
    () => saldo - valorTotalCarrinho,
    [saldo, valorTotalCarrinho]
  );

  return (
    <main className={styles.container}>
      <div className={styles.topbar}>
        <IconButton
          className={styles.iconButton}
          onClick={() => navigate("/feira")}
        >
          <ArrowBackIcon />
        </IconButton>

        <h2 className={styles.titulo}>Carrinho</h2>
      </div>

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
          <span>R$ {valorTotalCarrinho.toFixed(2)}</span>
        </div>
        <div>
          <h2>Saldo: </h2>
          <span> R$ {Number(saldo).toFixed(2)}</span>
        </div>
        <div>
          <h2>Saldo total: </h2>
          <span> R$ {total.toFixed(2)}</span>
        </div>
      </section>
      <Button
        color="primary"
        variant="contained"
        disabled={total < 0 || carrinho.length === 0}
        onClick={() => {
          efetuarCompra();
          setOpenSnackbar(true);
        }}
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
