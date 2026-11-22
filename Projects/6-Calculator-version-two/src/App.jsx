import Button from "./Components/Button";
import Container from "./Components/Container";
import ButtonContainer from "./Components/ButtonContainer";
import "./App.css";
import { useState } from "react";
function App() {
  let buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  let [Expression, setExpression] = useState(0);
  console.log(
    String(["-", "+", "*", "/"]).includes(Expression[Expression.length - 1]),
  );
  const buttonClick = (buttonName) => {
    if (buttonName === "C") {
      setExpression(0);
      return;
    }

    if (buttonName === "=") {
      if (!Expression) return;

      try {
        let result = eval(Expression);
        setExpression(String(result));
      } catch {
        setExpression("Syntax Error");
      }

      return;
    }

    let operators = ["-", "+", "*", "/"];

    let lastCharacter = Expression[Expression.length - 1];

    if (operators.includes(lastCharacter) && operators.includes(buttonName)) {
      return;
    }

    let newExpression = Expression ? Expression + buttonName : buttonName;

    setExpression(newExpression);
  };

  return (
    <>
      <center>
        <Container>
          <h1>Calculator v.2</h1>
          <p className="expression">{Expression}</p>
          <ButtonContainer
            buttons={buttons}
            handleButtonClick={buttonClick}
          ></ButtonContainer>
        </Container>
      </center>
    </>
  );
}

export default App;
