import React, { useState } from "react";
import '../App.css';

const CadastroForm = ({ onAddProduct }) => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [disponivel, setDisponivel] = useState("sim");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome || !valor) {
            alert("Preencha os campos obrigatórios!");
            return;
        }
        onAddProduct({ nome, descricao, valor: parseFloat(valor), disponivel });
        setNome("");
        setDescricao("");
        setValor("");
        setDisponivel("sim");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Cadastro de Produto</h2>
                <label>Nome do Produto:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <label>Descrição do Produto:</label>
                <input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <label>Valor do Produto:</label>
                <input
                    type="number"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                />
                <label>Disponível para Venda:</label>
                <select
                    value={disponivel}
                    onChange={(e) => setDisponivel(e.target.value)}
                >
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                </select>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroForm;
