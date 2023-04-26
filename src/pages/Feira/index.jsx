import React from "react";
import styles from "./Feira.module.css";
import NavBar from "./NavBar";
import Produto from "components/Produto";
import feira from "./feira.json";

export default function Feira() {
  return (
    <div className={styles.container}>
      <NavBar />
      <header className={styles.header}>
        <div>
          <h2>Olá!</h2>
          <h3>Saldo: R$</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </header>
      <section className={styles.list}>
        <h2>Produto:</h2>
        {feira.map((produto) => (
          <Produto key={produto.id} {...produto} />
        ))}
      </section>
    </div>
  );
}
