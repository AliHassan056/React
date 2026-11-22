import styles from './CalcInput.module.css';
function CalcInput(){
  return <input className={styles.calcInput} type="text" placeholder="10+45..." />
}

export default CalcInput;