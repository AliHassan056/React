import styles from "./Button.module.css";
function Button({ buttonText, onClick }) {
  return (
    <>
      <button
        type="button"
        class={`${styles.button} btn-subtle theme-primary`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
}

export default Button;
