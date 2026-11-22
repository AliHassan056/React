import AppName from "./components/AppName";
import AddTaskLayout from "./components/AddTask";
import ExampleTask from "./components/ExampleTasks";
import "./App.css";
function App() {
  return (
    <center class="todo-center">
      <AppName></AppName>
      <AddTaskLayout></AddTaskLayout>
      <ExampleTask></ExampleTask>
      <div id="itemsContainer">
        <ExampleTask></ExampleTask>
      <ExampleTask></ExampleTask>
      </div>
    </center>
  );
}

export default App;
