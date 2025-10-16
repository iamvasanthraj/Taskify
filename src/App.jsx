import { useEffect, useState } from "react";
import Progress from "./Components/Progress";
import TaskForm from "./Components/Taskform";
import TaskList from "./Components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  };

  return (
    <div className="main-container">
      <h1>Taskify</h1>
      <p> Organize and track tasks effortlessly </p>
      <TaskForm addTask={addTask} />
      <TaskList />
      <Progress />
    </div>
  );
}
