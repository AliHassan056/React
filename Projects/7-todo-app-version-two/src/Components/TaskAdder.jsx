import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TaskAdder.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
function TaskAdder({ taskDetails }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const HandleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const HandleTaskDate = (event) => {
    setTaskDate(event.target.value);
  };

  const handleTaskClick = () => {
    taskDetails(taskName, taskDate);
    setTaskName("");
    setTaskDate("");
  };

  return (
    <>
      <div className={styles.taskAdder}>
        <div>
          <input
            onChange={HandleTaskName}
            type="text"
            placeholder="Task Name"
            value={taskName}
          />
        </div>
        <div>
          <input onChange={HandleTaskDate} type="date" value={taskDate} />
        </div>
        <div>
          <button onClick={handleTaskClick}>
            <IoIosAddCircleOutline />
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskAdder;
