import styles from "./ButtonCreate.module.css";
function ButtonCreate(props) {
  return <button className={styles.button}>{props.buttonTitle}</button>;
}

export default ButtonCreate;
