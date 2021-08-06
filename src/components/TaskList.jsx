import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const initTasks = (tasks, storageKey) => {
  const tasksInLocalStorage = JSON.parse(localStorage.getItem(storageKey));
  if (tasksInLocalStorage) return tasksInLocalStorage;

  return tasks.map((task) => ({ ...task, checked: false }));
};

const TaskList = ({ tasks, storageKey }) => {
  const [tasksWithCheck, setTasksWithCheck] = useState(
    initTasks(tasks, storageKey)
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasksWithCheck));
  }, [tasksWithCheck]);

  const handleTaskToggle = (taskId) => {
    setTasksWithCheck((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === taskId
          ? { ...prevTask, checked: !prevTask.checked }
          : prevTask
      )
    );
  };

  return (
    <div>
      <h3>Tasks</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {tasksWithCheck.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              id={task.id}
              name={task.id}
              onChange={() => handleTaskToggle(task.id)}
              checked={task.checked}
            />
            <label htmlFor={task.id}>{task.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
