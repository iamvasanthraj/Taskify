export default function Progress({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p className="no-tasks">No tasks yet!</p>;
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progress-container">
      <p className="progress-text">
        Completed: {completedTasks} of {totalTasks} tasks ({percentage}%)
      </p>
      <div className="progress-bar-background">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
