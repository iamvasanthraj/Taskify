import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [catogory, setCategory] = useState("General");

  const handlesumbit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    
    addTask({ text: task, priority, catogory, completed: false });

    setTask("");
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <form onSubmit={handlesumbit}>
      <input
        value={task}
        type="text"
        placeholder="Enter the Task"
        onChange={(e) => setTask(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select value={catogory} onChange={(e) => setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>

      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}
