import Button from "./Button";
function Item({ itemName }) {
  const buttonFunction = () => {
    console.log(itemName);
  };
  return (
    <>
      <li class="list-group-item">{itemName}</li>
      <Button buttonText="Buy" buttonFunction={buttonFunction}></Button>
    </>
  );
}

export default Item;
