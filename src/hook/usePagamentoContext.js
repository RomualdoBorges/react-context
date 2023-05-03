import { PagamentoContext } from "common/context/Pagamento";
import React from "react";

export const usePagamentoContext = () => {
  const { tiposPagamento, formaPagamento, setFormaPagamento } =
    React.useContext(PagamentoContext);

  function mudarFormaPagamento(id) {
    const pagamentoAtual = tiposPagamento.find(
      (pagamento) => pagamento.id === id
    );

    setFormaPagamento(pagamentoAtual);
  }

  return {
    tiposPagamento,
    formaPagamento,
    mudarFormaPagamento,
  };
};
