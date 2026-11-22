import Task from "./Task";
function Tasks(props) {
  return (
    <>
      {props.tasks.map((item) => (
        <Task taskName={item.taskName} taskDate={item.taskDate}></Task>
      ))}
    </>
  );
}

export default Tasks;
