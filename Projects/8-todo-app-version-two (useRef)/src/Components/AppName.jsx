import styles from "./AppName.module.css";
function AppName({ app_name }) {
  return (
    <>
      <h1 className={styles.AppName}>{app_name}</h1>
    </>
  );
}

export default AppName;
