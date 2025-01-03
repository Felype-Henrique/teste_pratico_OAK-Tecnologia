import React from "react";
import '../App.css';

const ProdutoList = ({ produtos, onNewProduct }) => {
    const produtosOrdenados = [...produtos].sort((a, b) => a.valor - b.valor);

    return (
        <div className="container">
            <h2>Listagem de Produtos</h2>
            <button onClick={onNewProduct}>Cadastrar Novo Produto</button>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosOrdenados.map((produto, index) => (
                        <tr key={index}>
                            <td>{produto.nome}</td>
                            <td>{produto.valor.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProdutoList;
