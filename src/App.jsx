import Progress from "./Components/Progress";
import TaskForm from "./Components/Taskform";
import TaskList from "./Components/TaskList";

export default function App(){
  return(
    <div className="main-container">
      <h1>Taskify</h1>
      <p> Organize and track tasks effortlessly </p>
      <TaskForm/>
      <TaskList/>
      <Progress/>
    </div>
  )
}