import React from "react";
import TaskList from "../components/TaskList";
import localStateTasks from "../data/localStateTasks";
import webStorageTasks from "../data/webStorageTasks";

const ComponentComposition = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <CardComponent>
        <CardHeader title="Local state tasks" />
        <CardContent text="These are the tasks for the local state section">
          <TaskList tasks={localStateTasks} storageKey="localStateCardTasks" />
        </CardContent>
      </CardComponent>
      <CardComponent>
        <CardHeader title="Web storage tasks" />
        <CardContent text="These are the tasks for the web storage section">
          <TaskList tasks={webStorageTasks} storageKey="webStorageCardTasks" />
        </CardContent>
      </CardComponent>
    </div>
  );
};

const CardComponent = ({ children }) => {
  return (
    <div
      style={{
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ title }) => {
  return <h2>{title}</h2>;
};

const CardContent = ({ text, children }) => {
  return (
    <section>
      <p>{text}</p>
      {children}
    </section>
  );
};

export default ComponentComposition;
