import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #000;
  justify-content: center;
  padding: 20px 0;
`;

export const CalculatorContainer = styled.div`
  background-color: #202020;
  width: 20%;
  max-height: 380px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 1550px) {
    width: 30%;
  }
  @media (max-width: 1026px) {
    width: 50%;
  }
  @media (max-width: 630px) {
    width: 80%;
  }
  @media (max-width: 390px) {
    width: 99%;
  }
`;

export const ResultView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
`;

export const ResultPreText = styled.h1`
  font-size: 13px;
  color: #808080;
`;

export const InputText = styled.input`
  background-color: #202020;
  border: none;
  text-align: end;
  color: #f0f0f0;
  font-size: 35px;
  margin-top: 5px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  outline: none !important;
  text-overflow: ellipsis;
  ::placeholder {
    color: #f0f0f0;
  }

  :focus {
    border: none;
  }
`;

export const ResultText = styled.h1`
  color: #f0f0f0;
  font-size: 35px;
  margin-top: 5px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;

  text-overflow: ellipsis;
`;

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
`;

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

export const ButtonConfirm = styled.button`
  color: #323232;
  background-color: #76b9ed;
  width: 24%;
  height: 50px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 1.5px;

  :hover {
    background-color: #5092c4;
  }
`;
