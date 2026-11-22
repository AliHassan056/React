import NameList from "./Components/NamesList";
function App() {
  let foodItems = ["Burger", "Pizza", "Shawarma", "Zahra", "Kakri"];

  return (
    <>
      <NameList fItems={foodItems}></NameList>
    </>
  );
}

export default App;
