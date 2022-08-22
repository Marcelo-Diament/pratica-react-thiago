import { ListaDeProdutos, Card } from "./styles";
const ListagemDeProdutos = () => {
  return (
    <main>
      <h3>Produtos</h3>
      <ListaDeProdutos>
        <Card>
          <img
            alt="Fone de Ouvido"
            src="https://s2.glbimg.com/mma8-1NK-jok6W2NVY1eoRKlxW0=/0x0:1920x1440/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/8/6/XvaNKAQWeDwYnmL3itCQ/fone-de-ouvido-da-apple.jpg"
          />
          <h4>Fone de ouvido</h4>
          <p className="descricao">Fone de ouvido branco, com fio</p>
          <p className="preco">R$ 70,00</p>
          <button>Comprar</button>
        </Card>
        <Card>
          <img
            alt="Fone de Ouvido"
            src="https://s2.glbimg.com/mma8-1NK-jok6W2NVY1eoRKlxW0=/0x0:1920x1440/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/8/6/XvaNKAQWeDwYnmL3itCQ/fone-de-ouvido-da-apple.jpg"
          />
          <h4>Fone de ouvido</h4>
          <p className="descricao">Fone de ouvido branco, com fio</p>
          <p className="preco">R$ 70,00</p>
          <button>Comprar</button>
        </Card>
        <Card>
          <img
            alt="Fone de Ouvido"
            src="https://s2.glbimg.com/mma8-1NK-jok6W2NVY1eoRKlxW0=/0x0:1920x1440/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/8/6/XvaNKAQWeDwYnmL3itCQ/fone-de-ouvido-da-apple.jpg"
          />
          <h4>Fone de ouvido</h4>
          <p className="descricao">Fone de ouvido branco, com fio</p>
          <p className="preco">R$ 70,00</p>
          <button>Comprar</button>
        </Card>
      </ListaDeProdutos>
    </main>
  );
};

export default ListagemDeProdutos;
