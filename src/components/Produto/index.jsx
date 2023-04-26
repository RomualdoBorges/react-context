import React from "react";
import styles from "./Produto.module.css";
import { Card, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

function Produto({ nome, foto, valor }) {
  return (
    <Card className={styles.container}>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary">
          <RemoveIcon />
        </IconButton>
      </div>
    </Card>
  );
}

export default React.memo(Produto);
