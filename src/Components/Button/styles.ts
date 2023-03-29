import styled from "styled-components";

export const Button = styled.button<{ white?: boolean }>`
  color: ${({ theme }) => theme.inputText};
  background-color: ${({ white, theme }) =>
    white ? theme.buttonBgL : theme.buttonBgD};
  width: 24%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 1.5px;
  border: none;
  transition: 300ms;

  :hover {
    background-color: ${({ white, theme }) =>
      !white ? theme.buttonBgL : theme.buttonBgD};
    transition: 300ms;
  }
`;

export const Icon = styled.img`
  width: 15px;
`;
