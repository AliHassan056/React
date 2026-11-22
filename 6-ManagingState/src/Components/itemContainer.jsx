import "bootstrap/dist/css/bootstrap.min.css";
import CreateButton from "./Button.jsx";
import Item from "./Item.jsx";
function ItemContainer({ fruits }) {
  return (
    <>
      <ul class="list-group">
        {fruits.map((fruit) => (
          <Item itemName={fruit}></Item>
        ))}
      </ul>
    </>
  );
}

export default ItemContainer;
