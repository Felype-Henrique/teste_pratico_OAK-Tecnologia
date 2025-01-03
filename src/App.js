import React, { useState } from "react";
import CadastroForm from "./components/CadastroForm";
import ProdutoList from "./components/ProdutoList";

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [isCadastroVisible, setIsCadastroVisible] = useState(true);

  const handleAddProduct = (produto) => {
    setProdutos([...produtos, produto]);
    setIsCadastroVisible(false);
  };

  const handleNewProduct = () => {
    setIsCadastroVisible(true);
  };

  return (
    <div>
      {isCadastroVisible ? (
        <CadastroForm onAddProduct={handleAddProduct} />
      ) : (
        <ProdutoList produtos={produtos} onNewProduct={handleNewProduct} />
      )}
    </div>
  );
};

export default App;
