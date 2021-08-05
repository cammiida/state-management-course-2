import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {tasks.map((task) => (
          <div key={task.id}>
            <input type="checkbox" id={task.id} name={task.id} />
            <label htmlFor={task.id}>{task.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
