import React, { useState } from "react";
import CadastroForm from "./components/CadastroForm";
import ProdutoList from "./components/ProdutoList";
import './App.css';

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
    <div className="container">
      <h1>Gestão de Produtos</h1>
      {isCadastroVisible ? (
        <CadastroForm onAddProduct={handleAddProduct} />
      ) : (
        <ProdutoList produtos={produtos} onNewProduct={handleNewProduct} />
      )}
    </div>
  );
};

export default App;
