import styles from "./TaskContainer.module.css";

function TaskContainer({ TodoTasks, tasktoDelete }) {
  const handleDeleteBtn = (index) => {
    tasktoDelete(index);
  };
  return (
    <div>
      {TodoTasks.length > 0
        ? TodoTasks.map((task, index) => {
            return (
              <div className={styles.taskContainer} key={index}>
                <div>
                  <p>{task.taskName}</p>
                </div>

                <div>
                  <p>{task.taskDate}</p>
                </div>

                <div>
                  <button
                    onClick={() => {
                      handleDeleteBtn(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : (<p>No Tasks Yet :(</p>)}
    </div>
  );
}

export default TaskContainer;
