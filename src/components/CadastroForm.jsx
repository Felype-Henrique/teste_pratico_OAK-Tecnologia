import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <h2>Cadastro de Produto</h2>
            <label>
                Nome do Produto:
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Descrição do Produto:
                <input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </label>
            <br />
            <label>
                Valor do Produto:
                <input
                    type="number"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Disponível para Venda:
                <select
                    value={disponivel}
                    onChange={(e) => setDisponivel(e.target.value)}
                >
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                </select>
            </label>
            <br />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastroForm;
