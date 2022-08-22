import styled from "styled-components";

export const HeaderTag = styled.header`
  align-items: center;
  background-color: lightblue;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 16px;

  button {
    border: 0;
    border-radius: 4px;
    padding: 6px 12px;
  }
`;

export const InputBlock = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 4px;
    display: flex;
    padding: 12px 16px;

    input {
      border: 0;
      margin-left: 12px;
      outline: 0;
    }
  }
`;
