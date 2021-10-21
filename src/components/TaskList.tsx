import React from "react";
import { Task } from "../types";

type TaskListState = {
  tasks: Task[];
  storageKey: string;
};

const TaskList = ({ tasks }: TaskListState) => {
  return (
    <div>
      <h3>Tasks</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              id={task.id.toString()}
              name={task.id.toString()}
            />
            <label htmlFor={task.id.toString()}>{task.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
