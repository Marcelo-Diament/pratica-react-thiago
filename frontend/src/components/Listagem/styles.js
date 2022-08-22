import styled from "styled-components";

export const ListaDeProdutos = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
`;

export const Card = styled.li`
  font-size: 18px;

  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  img {
    max-height: 200px;
    width: 100%;
  }

  .descricao {
    color: #555;
    font-size: 16px;
  }

  .preco {
    font-size: 18px;
    font-weight: bold;
  }

  button {
    background-color: yellowgreen;
    border-radius: 6px;
    color: #000;
    font-weight: bold;
    padding: 6px 12px;
  }
`;
