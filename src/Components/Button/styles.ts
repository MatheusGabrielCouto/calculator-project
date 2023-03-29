import styled from "styled-components";

export const Button = styled.button<{ white?: boolean }>`
  color: #f0f0f0;
  background-color: ${(props) => (props.white ? "#3b3b3b" : "#323232")};
  width: 24%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 1.5px;
  border: none;

  :hover {
    background-color: ${(props) => (!props.white ? "#3b3b3b" : "#323232")};
  }
`;

export const Icon = styled.img`
  width: 15px;
`;
