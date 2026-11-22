import styles from "./Button.module.css";
function Button({ buttonText, buttonClick }) {
  return (
    <>
      <button className={styles.button} onClick={buttonClick}>
        {buttonText}
      </button>
    </>
  );
}

export default Button;
