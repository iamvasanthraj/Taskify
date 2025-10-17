export default function TaskList({ tasks, updateTask, deleteTask, clearTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div>
              <span className={task.completed ? "completed-task" : ""}>
                {task.text}{" "}
                <small>
                  ({task.priority}, {task.catogory})
                </small>
              </span>
            </div>

            <div>
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(index)}>
                {task.delete ? "Undo" : "Delete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length > 0 && <button onClick={clearTask}>Clear All</button>}
    </div>
  );
}
