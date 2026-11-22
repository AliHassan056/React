import FruitInput from "./Components/FruitInput";
import Container from "./Components/Container";
import ItemContainer from "./Components/itemContainer";
import "./App.css";
import { useState } from "react";
function App() {
  let [fruits, setFruitList] = useState(["Apple", "Banana", "Mango"]);

  let [textToShow, textStateMethod] = useState("Food item entered by User");

  const changeText = (event) => {
    textStateMethod(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter" && event.target.value != "") {
      let newFruits = [...fruits, event.target.value];
      setFruitList(newFruits);
      textStateMethod();
    }
  };

  return (
    <>
      <Container>
        <h1>Fruits Cart</h1>
        <FruitInput
          handleOnChange={changeText}
          handleKeyDown={handleKeyDown}
        ></FruitInput>
        <p>{textToShow}</p>
        <ItemContainer fruits={fruits}></ItemContainer>
      </Container>
    </>
  );
}

export default App;
