import ButtonCreate from "./Components/Button";
import CalcInput from "./Components/CalcInput";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <div id={styles.center}>
        <center>
          <div>
            <CalcInput></CalcInput>
          </div>
          <div id="btnRow">
            <ButtonCreate buttonTitle="1"></ButtonCreate>
            <ButtonCreate buttonTitle="2"></ButtonCreate>
            <ButtonCreate buttonTitle="3"></ButtonCreate>
          </div>

          <div id="btnRow2">
            <ButtonCreate buttonTitle="4"></ButtonCreate>
            <ButtonCreate buttonTitle="5"></ButtonCreate>
            <ButtonCreate buttonTitle="6"></ButtonCreate>
          </div>

          <div id="btnRow2">
            <ButtonCreate buttonTitle="7"></ButtonCreate>
            <ButtonCreate buttonTitle="8"></ButtonCreate>
            <ButtonCreate buttonTitle="9"></ButtonCreate>
          </div>

          <div id="btnRow2">
            <ButtonCreate buttonTitle="C"></ButtonCreate>
            <ButtonCreate buttonTitle="0"></ButtonCreate>
            <ButtonCreate buttonTitle="="></ButtonCreate>
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
