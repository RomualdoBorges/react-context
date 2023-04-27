import React from "react";

export const CarrinhoContext = React.createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = React.useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
