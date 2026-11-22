import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Item.module.css";
console.log(styles);
function Item({ itemName }) {

  const HandleBuying = (event)=>{
    console.log(event)
    console.log(itemName);
  }
  return (
    <li className="list-group-item">
      <span>{itemName}</span>
      <button
        className={`${styles.button} btn-solid theme-primary`}
        onClick={(event)=>HandleBuying(event)}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
