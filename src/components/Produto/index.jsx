import React from "react";
import styles from "./Produto.module.css";
import { Card, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useCarrinhoContext from "hook/useCarrinhoContext";

function Produto({ nome, foto, valor, id, unidade }) {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(
    (itemDoCarrinho) => itemDoCarrinho.id === id
  );

  return (
    <Card className={styles.container}>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
          onClick={() => removerProduto(id)}
          disabled={!produtoNoCarrinho}
        >
          <RemoveIcon />
        </IconButton>
        {produtoNoCarrinho?.quantidade || 0}
        <IconButton
          color="primary"
          onClick={() => {
            adicionarProduto({ nome, foto, id, valor });
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Card>
  );
}

export default React.memo(Produto);
