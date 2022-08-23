import { useState, useRef } from "react";
import Header from "../../components/Header";
import { Form, InputBlock } from "./styles";

function CriarProduto() {
  const [nome, setNome] = useState("nome do produto");
  const [descricao, setDescricao] = useState("descricao do produto");
  const [preco, setPreco] = useState("preco do produto");
  const [estoque, setEstoque] = useState("estoque do produto");
  const [foto, setFoto] = useState("foto do produto");

  const fotoRef = useRef(null);

  const cadastrar = (event) => {
    event.preventDefault();
    console.log({
      nome,
      descricao,
      preco,
      estoque,
      foto,
      fotoRef: fotoRef.current.value,
    });
  };
  return (
    <>
      <Header />
      <h1>CRIAR PRODUTO</h1>
      <Form onSubmit={cadastrar} method="POST" action="">
        <InputBlock>
          <label htmlFor="nome">Nome do Produto</label>
          <input
            value={nome}
            type="text"
            maxLength="200"
            id="nome"
            name="nome"
            onChange={(event) => setNome(event.target.value)}
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            value={descricao}
            id="descricao"
            name="descricao"
            onChange={(event) => setDescricao(event.target.value)}
          ></textarea>
        </InputBlock>
        <InputBlock>
          <label htmlFor="estoque">Estoque</label>
          <input
            value={estoque}
            type="number"
            min="0"
            id="estoque"
            name="estoque"
            onChange={(event) => setEstoque(event.target.value)}
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="preco">Preço</label>
          <input
            value={preco}
            type="number"
            min="0"
            id="preco"
            name="preco"
            onChange={(event) => setPreco(event.target.value)}
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="foto">Foto</label>
          <input
            value={foto}
            type="url"
            id="foto"
            name="foto"
            ref={fotoRef}
            onChange={(event) => setFoto(event.target.value)}
          />
        </InputBlock>
        <button>Cadastrar</button>
      </Form>
    </>
  );
}

export default CriarProduto;
