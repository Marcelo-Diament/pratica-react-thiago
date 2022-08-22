import { useState, useEffect } from "react";
import axios from "axios";
import { ListaDeProdutos, Card } from "./styles";
const ListagemDeProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  const buscarProdutos = async () => {
    const { data } = await axios.get("http://localhost:8000/produtos");
    setProdutos(data);
  };
  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <main>
      <h3>Produtos</h3>
      <ListaDeProdutos>
        {produtos.map((produto) => {
          return (
            <Card key={produto.id}>
              <img alt={produto.nome} src={produto.foto} />
              <h4>{produto.nome}</h4>
              <p className="descricao">{produto.descricao}</p>
              <p className="preco">
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button>Comprar</button>
            </Card>
          );
        })}
      </ListaDeProdutos>
    </main>
  );
};

export default ListagemDeProdutos;
