import { useState } from "react";
import Item from "./Item.jsx";

function ItemContainer({ cars, onBuy }) {
  let [activeItems, setActiveItems] = useState([]);

  const addActiveItems = (item) => {
    setActiveItems([...activeItems, item]);
  };
  return (
    <>
      <div>
        <ol class="list-group ">
          {cars.map((car) => (
            <Item
              itemName={car}
              onBuy={onBuy}
              addActiveItems={() => {
                addActiveItems(car);
              }}
              isBought={activeItems.includes(car)}
            ></Item>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ItemContainer;
