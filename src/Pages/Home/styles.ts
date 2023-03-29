import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.wrapper};
  justify-content: center;
  padding: 20px 0;
  transition: 300ms;
`;

export const ButtonTheme = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: 300ms;
`;

export const IconTheme = styled.img`
  width: 25px;
`;

export const CalculatorContainer = styled.div`
  background-color: ${({ theme }) => theme.container};
  width: 20%;
  max-height: 380px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 300ms;
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
  color: ${({ theme }) => theme.label};
`;

export const InputText = styled.input`
  background-color: ${({ theme }) => theme.container};
  border: none;
  text-align: end;
  color: ${({ theme }) => theme.inputText};
  font-size: 35px;
  margin-top: 5px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  outline: none !important;
  text-overflow: ellipsis;
  transition: 300ms;

  ::placeholder {
    color: ${({ theme }) => theme.inputText};
  }

  :focus {
    border: none;
  }
`;

export const ResultText = styled.h1`
  color: ${({ theme }) => theme.inputText};
  font-size: 35px;
  margin-top: 5px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  transition: 300ms;

  text-overflow: ellipsis;
`;

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
`;

export const Icon = styled.img`
  width: 15px;
`;

export const ButtonConfirm = styled.button`
  color: #323232;
  background-color: ${({ theme }) => theme.confirm};
  width: 24%;
  height: 50px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 1.5px;
  transition: 300ms;
  :hover {
    background-color: ${({ theme }) => theme.confirmDark};
    transition: 300ms;
  }
`;
