import Container from "./Components/Container";
import CarInput from "./Components/CarInput";
import Item from "./Components/Item";
import ItemContainer from "./Components/ItemContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContainer from "./Components/CartContainer";
import "./App.css";
import { useState } from "react";
function App() {
  let [carBoughtText, setCarBoughtText] = useState("");
  let [count, setCount] = useState(0);

  let [Cart, setCart] = useState([]);
  let [Cars, setCars] = useState([
    "Audi",
    "Mustang",
    "Prado",
    "Nisan GTR",
    "Ferarri",
  ]);

  const CarBought = (carName) => {
    console.log(`Hello ${carName}`);
    setCart([...Cart, carName]);
    setCarBoughtText(`Added to Bag :  ${carName}`);
    setCount(++count);
    setTimeout(() => {
      setCarBoughtText("");
    }, 2000);
  };

  let [error, setError] = useState("");
  const handleOnKeyDown = (event) => {
    if (event.key == "Enter") {
      if (!Cars.includes(event.target.value)) {
        let newList = [...Cars, event.target.value];
        setCars(newList);
      } else {
        setError("The Same Car is already listed");
      }
    }
  };
  return (
    <>
      <center>
        <Container>
          <p>
            <b>Bag Items</b> {count}
          </p>
          <h1 id="appTitle">Car Showroom</h1>
          <CarInput handleOnKeyDown={handleOnKeyDown}></CarInput>
          <p id={error ? "error" : ""}>{error}</p>
        </Container>

        <Container>
          <ItemContainer cars={Cars} onBuy={CarBought}></ItemContainer>
        </Container>

        <Container>
          <h1>My Bag</h1>
          <p>
            <b>Items</b> {count}
          </p>
          <CartContainer cartItems={Cart}></CartContainer>
        </Container>
      </center>

      <div id="messageBox">
        <p className={carBoughtText && "alert theme-success"}>
          {carBoughtText}
        </p>
      </div>
    </>
  );
}

export default App;
