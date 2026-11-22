import styles from "./Button.module.css";
function CreateButton({ buttonText, buttonFunction }) {
  return (
    <>
      <button onClick={buttonFunction} className={styles.button}>
        {buttonText}
      </button>
    </>
  );
}

export default CreateButton;
