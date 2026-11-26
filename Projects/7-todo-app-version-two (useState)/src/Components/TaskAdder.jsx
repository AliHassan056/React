import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TaskAdder.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRef, useState } from "react";
function TaskAdder({ taskDetails }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const noOfUpdates = useRef(0);
  const HandleTaskName = (event) => {
    setTaskName(event.target.value);
    noOfUpdates.current += 1;
  };

  const HandleTaskDate = (event) => {
    setTaskDate(event.target.value);
    console.log(noOfUpdates.current);
  };

  const handleTaskClick = (event) => {
    console.log(event);
    event.preventDefault();

    taskDetails(taskName, taskDate);
    setTaskName("");
    setTaskDate("");
  };

  return (
    <>
      <form className={styles.taskAdder} onSubmit={handleTaskClick}>
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
          <button>
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </>
  );
}

export default TaskAdder;
