import AppName from "./components/AppName";
import AddTaskLayout from "./components/AddTask";
import ExampleTask from "./components/ExampleTasks";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import "./App.css";
function App() {
  let TasksDue = [
    {
      taskName: "Pray",
      taskDate: "2026-12-10",
    },
    {
      taskName: "Dance",
      taskDate: "2026-12-10",
    },
    ,
    {
      taskName: "Jummah",
      taskDate: "2026-13-10",
    },
  ];
  return (
    <center class="todo-center">
      <AppName></AppName>
      <AddTaskLayout></AddTaskLayout>
      <div id="itemsContainer">
        <Tasks tasks={TasksDue}></Tasks>
      </div>
    </center>
  );
}

export default App;
