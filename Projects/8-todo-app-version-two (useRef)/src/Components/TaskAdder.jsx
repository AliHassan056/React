import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TaskAdder.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRef, useState } from "react";
function TaskAdder({ taskDetails }) {
  const todoTaskName = useRef();
  const todoTaskDate = useRef();

  const handleTaskClick = (event) => {
    const taskName = todoTaskName.current.value;
    const taskDate = todoTaskDate.current.value;

    taskDetails(taskName, taskDate);
    todoTaskName.current.value = "";
    todoTaskDate.current.value = "";
    event.preventDefault();
  };

  return (
    <>
      <form className={styles.taskAdder} onSubmit={handleTaskClick}>
        <div>
          <input ref={todoTaskName} type="text" placeholder="Task Name" />
        </div>
        <div>
          <input type="date" ref={todoTaskDate} />
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
