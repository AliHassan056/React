import Button from "./Button.jsx";
import styles from "./Item.module.css";
function Item({ itemName, onBuy, addActiveItems, isBought }) {
  return (
    <>
      <li className={`list-group-item ${isBought ? "active" : ""} `}>
        <span className={styles.item}>{itemName} </span>
        <Button
          buttonText="Add to Bag"
          onClick={() => {
            onBuy(itemName);
            addActiveItems();
          }}
        ></Button>
      </li>
    </>
  );
}

export default Item;
