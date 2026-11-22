import styles from "./CarInput.module.css";
function CarInput({ handleOnKeyDown }) {
  return (
    <>
      <input
        className={styles.CarInput}
        type="text"
        placeholder="Enter Car Name"
        onKeyDown={handleOnKeyDown}
      />
    </>
  );
}
export default CarInput;
