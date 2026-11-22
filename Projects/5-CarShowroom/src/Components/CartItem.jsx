import Button from "./Button.jsx";
import styles from "./CartItem.module.css";
function CartItem({ itemName, onBuy }) {
  return (
    <>
      <li class={`list-group-item `}>
        <span className={styles.item}>{itemName} </span>
      </li>
    </>
  );
}

export default CartItem;
