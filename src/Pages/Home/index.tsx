import { useState } from "react";

import reactLogo from "../../Assets/Icons/trash.svg";

import * as S from "./styles";

export default function Home() {
  const [historic, setHistoric] = useState("");

  const [operation, setOperation] = useState<string>();

  const [oldValue, setOldValue] = useState<string>("");
  const [value, setValue] = useState<string>("");

  function inputNumber(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    setValue(value + target.value);
  }

  function inputPreValue(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;

    if (value === "") {
      return "";
    }

    setOperation(target.value);
    setHistoric(`${value} ${target.value}`);
    setOldValue(value);
    setValue("");
  }

  function calcValue() {
    switch (operation) {
      case "+": {
        setValue(String(Number(value) + Number(oldValue)));
        setHistoric("");
        setOldValue("");
        break;
      }
      case "-": {
        setValue(String(Number(oldValue) - Number(value)));
        setHistoric("");
        setOldValue("");
        break;
      }
      case "x": {
        setValue(String(Number(oldValue) * Number(value)));
        setHistoric("");
        setOldValue("");
        break;
      }
      case "/": {
        setValue(String(Number(oldValue) / Number(value)));
        setHistoric("");
        setOldValue("");
        break;
      }
    }
  }

  function clearValues() {
    setValue("");
    setHistoric("");
    setOperation("");
  }

  function percentage() {
    if (value === "") {
      return "";
    }
    const finishValue = Number(oldValue) * (Number(value) / 100);
    setValue(String(finishValue));
  }

  return (
    <S.Container>
      <S.CalculatorContainer>
        <S.ResultView>
          <S.ResultPreText>{historic}</S.ResultPreText>
          <S.ResultText>{value !== "" ? value : "0"}</S.ResultText>
        </S.ResultView>
        <S.KeyboardContainer>
          <S.Button onClick={inputPreValue} value="/">
            /
          </S.Button>
          <S.Button onClick={percentage}>%</S.Button>
          <S.Button onClick={clearValues}>CE</S.Button>
          <S.Button onClick={() => setValue("")}>
            <S.Icon src={reactLogo} alt="Icone de lixeira" />
          </S.Button>
          <S.Button onClick={inputNumber} value={7} white>
            7
          </S.Button>
          <S.Button onClick={inputNumber} value={8} white>
            8
          </S.Button>
          <S.Button onClick={inputNumber} value={9} white>
            9
          </S.Button>
          <S.Button onClick={inputPreValue} value="x">
            x
          </S.Button>
          <S.Button onClick={inputNumber} value={4} white>
            4
          </S.Button>
          <S.Button onClick={inputNumber} value={5} white>
            5
          </S.Button>
          <S.Button onClick={inputNumber} value={6} white>
            6
          </S.Button>
          <S.Button onClick={inputPreValue} value="-">
            -
          </S.Button>
          <S.Button onClick={inputNumber} value={1} white>
            1
          </S.Button>
          <S.Button onClick={inputNumber} value={2} white>
            2
          </S.Button>
          <S.Button onClick={inputNumber} value={3} white>
            3
          </S.Button>
          <S.Button onClick={inputPreValue} value="+">
            +
          </S.Button>
          <S.Button
            onClick={() => setValue(String(Number(value) * -1))}
            value="+/-"
            white
          >
            +/-
          </S.Button>
          <S.Button onClick={inputNumber} value={0} white>
            0
          </S.Button>
          <S.Button white onClick={inputNumber} value={"."}>
            ,
          </S.Button>
          <S.ButtonConfirm onClick={calcValue} value={value}>
            =
          </S.ButtonConfirm>
        </S.KeyboardContainer>
      </S.CalculatorContainer>
    </S.Container>
  );
}
