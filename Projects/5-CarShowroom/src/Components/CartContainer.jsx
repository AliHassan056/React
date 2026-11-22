import CartItem from "./CartItem.jsx";
import Item from "./Item.jsx";

function CartContainer({ cartItems }) {
  return (
    <>
      <div>
        <ol class="list-group">
          {cartItems.map((car) => (
            <CartItem itemName={car}></CartItem>
          ))}
        </ol>
      </div>
    </>
  );
}

export default CartContainer;
