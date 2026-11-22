import styles from "./FruitInput.module.css";
function FruitInput({ handleOnChange, handleKeyDown }) {
  return (
    <>
      <input
        className={styles.FruitInput}
        type="text"
        placeholder="Search for Fruits"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default FruitInput;
