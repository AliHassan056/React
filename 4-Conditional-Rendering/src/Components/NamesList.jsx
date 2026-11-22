import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";
import ErrorMessage from "./ErrorMessage";
function NameList(props) {
  <ErrorMessage fItems={props.fItems}></ErrorMessage>;
  return (
    <>
      <ul class="list-group">
        {props.fItems.map((item) => (
          <Item item={item}></Item>
        ))}
      </ul>
    </>
  );
}

export default NameList;
