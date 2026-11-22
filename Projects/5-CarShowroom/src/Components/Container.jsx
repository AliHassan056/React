import styles from "./Container.module.css";
function Container(props) {
  console.log(props);
  return (
    <>
      <div className={styles.container}>{props.children}</div>
    </>
  );
}

export default Container;
