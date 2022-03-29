import React from "react";

type TaskListState = {
  tasks: string[];
  storageKey: string;
};

const TaskList = ({ tasks }: TaskListState) => {
  return (
    <div>
      <h3>Tasks</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {tasks.map((task) => (
          <div key={task}>
            <input
              type="checkbox"
              id={task.toString()}
              name={task.toString()}
            />
            <label htmlFor={task.toString()}>{task}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
