import styles from "./FoodInput.module.css";
function FoodInput({handleOnChnage}) {

  return (
    <>
      <input
        className={styles.foodInput}
        type="text"
        placeholder="Search for Fruit"
        onChange={handleOnChnage}
      />
      <div>
        <p id="searchedQuery"></p>
      </div>
    </>
  );
}

export default FoodInput;
