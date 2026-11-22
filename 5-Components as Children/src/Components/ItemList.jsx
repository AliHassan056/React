import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";
function ItemList(props) {
  
  return (
    <>
      <ul class="list-group">
        {props.items.map((fruit) => (
          <Item itemName={fruit}></Item>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
