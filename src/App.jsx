import { useEffect, useState } from "react";
import Progress from "./Components/Progress";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  };

  const clearTask = () => {
    setTasks([]);
  };

  return (
    <div className="main-container">
      <h1>TASKIFY</h1>
      <p> Organize and track tasks effortlessly </p>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        clearTask={clearTask}
      />
      <Progress tasks={tasks} />
    </div>
  );
}
