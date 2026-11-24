import { useState } from "react";
import AppName from "./Components/AppName";
import TaskAdder from "./Components/TaskAdder";
import TaskContainer from "./Components/TasksContainer";

function App() {
  const [TodoTasks, setTodoTasks] = useState([
    {
      taskName: "Go to Gym",
      taskDate: "12-12-2025",
    },
  ]);

  const taskDetails = (taskName, taskDate) => {
    setTodoTasks([...TodoTasks, { taskName: taskName, taskDate: taskDate }]);
  };

  const tasktoDelete = (taskIndex) => {
    const remainingTasks = TodoTasks.filter(
      (task, index) => index != taskIndex,
    );
    setTodoTasks(remainingTasks);
  };
  return (
    <>
      <center>
        <AppName  app_name={"Todo App v2"}></AppName>
        <TaskAdder taskDetails={taskDetails}></TaskAdder>
        <TaskContainer
          TodoTasks={TodoTasks}
          tasktoDelete={tasktoDelete}
        ></TaskContainer>
      </center>
    </>
  );
}

export default App;
