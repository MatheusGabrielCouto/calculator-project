import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Button from "../../Components/Button";
import { darkTheme, lightTheme } from "../../styles/theme";

import SunIncon from "../../Assets/Icons/sun.svg";
import MoonIncon from "../../Assets/Icons/moon.svg";

import * as S from "./styles";

export default function Home() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
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

  function convertNumber() {
    setValue(String(Number(value) * -1));
  }

  function inputSetValues(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    setValue(target.value.replace(/\D/g, ""));
  }

  function inputKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    const target = event;

    switch (event.key) {
      case "+": {
        setOperation(event.key);
        setHistoric(`${value} ${event.key}`);
        setOldValue(value);
        setValue("");
        break;
      }
      case "-": {
        setOperation(event.key);
        setHistoric(`${value} ${event.key}`);
        setOldValue(value);
        setValue("");
        break;
      }
      case "*": {
        setOperation("x");
        setHistoric(`${value} x`);
        setOldValue(value);
        setValue("");
        break;
      }
      case "/": {
        setOperation(event.key);
        setHistoric(`${value} ${event.key}`);
        setOldValue(value);
        setValue("");
        break;
      }
      case "%": {
        percentage();
        break;
      }
    }

    if (target.key === "Enter") {
      calcValue();
    }
  }
  console.log(lightTheme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <S.Container>
        <S.ButtonTheme
          onClick={() => {
            setIsLightTheme(!isLightTheme);
          }}
        >
          {isLightTheme ? (
            <S.IconTheme src={MoonIncon} />
          ) : (
            <S.IconTheme src={SunIncon} />
          )}
        </S.ButtonTheme>
        <S.CalculatorContainer>
          <S.ResultView>
            <S.ResultPreText>{historic}</S.ResultPreText>
            <S.InputText
              placeholder="0"
              value={value}
              autoFocus
              onKeyDown={inputKeyDown}
              onChange={inputSetValues}
            />
          </S.ResultView>
          <S.KeyboardContainer>
            <Button onClick={inputPreValue} value="/" white={false} />
            <Button onClick={percentage} value="%" white={false} />
            <Button onClick={clearValues} value="CE" white={false} />

            <Button
              onClick={() => setValue("")}
              value="clear"
              icon
              white={!isLightTheme}
            />

            <Button onClick={inputNumber} value={7} white={true} />
            <Button onClick={inputNumber} value={8} white={true} />
            <Button onClick={inputNumber} value={9} white={true} />

            <Button onClick={inputPreValue} value="x" white={false} />

            <Button onClick={inputNumber} value={4} white={true} />
            <Button onClick={inputNumber} value={5} white={true} />
            <Button onClick={inputNumber} value={6} white={true} />

            <Button onClick={inputPreValue} value="-" white={false} />

            <Button onClick={inputNumber} value={1} white={true} />
            <Button onClick={inputNumber} value={2} white={true} />
            <Button onClick={inputNumber} value={3} white={true} />

            <Button onClick={inputPreValue} value="+" white={false} />
            <Button onClick={convertNumber} value="+/-" white={true} />

            <Button onClick={inputNumber} value={0} white={true} />

            <Button onClick={inputNumber} value="." white={true} />

            <S.ButtonConfirm onClick={calcValue} value={value}>
              =
            </S.ButtonConfirm>
          </S.KeyboardContainer>
        </S.CalculatorContainer>
      </S.Container>
    </ThemeProvider>
  );
}
