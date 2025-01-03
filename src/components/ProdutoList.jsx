import React from "react";

const ProdutoList = ({ produtos, onNewProduct }) => {
    const produtosOrdenados = [...produtos].sort((a, b) => a.valor - b.valor);

    return (
        <div>
            <h2>Listagem de Produtos</h2>
            <button onClick={onNewProduct}>Cadastrar Novo Produto</button>
            <table border="1" cellPadding="10">
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
