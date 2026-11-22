import styles from "./Item.module.css";
function Item(props) {
  return (
    <>
      <li className={`${styles["itemAh"]} list-group-item`}>{props.item}</li>
    </>
  );
}

export default Item;
