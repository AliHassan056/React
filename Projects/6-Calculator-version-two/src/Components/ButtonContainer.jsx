import Button from "./Button.jsx";
import styles from "./ButtonContainer.module.css";

function ButtonContainer({ buttons, handleButtonClick }) {
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button) => (
        <Button
          buttonText={button}
          buttonClick={() => handleButtonClick(button)}
        />
      ))}
    </div>
  );
}

export default ButtonContainer;
