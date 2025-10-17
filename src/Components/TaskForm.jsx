import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [catogory, setCategory] = useState("general");

  const handlesumbit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, catogory, completed: false });

    setTask("");
    setPriority("medium");
    setCategory("general");
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
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <select value={catogory} onChange={(e) => setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>

      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}
