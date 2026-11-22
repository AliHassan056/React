import Item from "./Components/Item";
import ItemList from "./Components/ItemList";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
function App() {
  let someFruits = ["Apple", "Mango", "Banana"];

  const handleOnChnage = (event) => {
   searchedQuery.innerText = event.target.value;
  };

  return (
    <>
      <Container>
        <h1>Fruits</h1>
        <FoodInput handleOnChnage={handleOnChnage}></FoodInput>
        <ItemList items={someFruits}></ItemList>
      </Container>

      <Container>
        <p>Above are the fruits that are good for your health and well-being</p>
      </Container>
    </>
  );
}

export default App;
