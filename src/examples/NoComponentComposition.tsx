import React from "react";
import TaskList from "../components/TaskList";
import localStateTasks from "../sections/1localState/localStateTasks";
import webStorageTasks from "../sections/3webStorage/webStorageTasks";
import { CardContent } from "../types";

const NoComponentComposition = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <CardComponent
        title="Local state tasks"
        content={{
          text: "These are the tasks for the local state section",
          tasks: localStateTasks,
          storageKey: "localStateCardTasks",
        }}
      />
      <CardComponent
        title="Web storage tasks"
        content={{
          text: "These are the tasks for the web storage section",
          tasks: webStorageTasks,
          storageKey: "webStorageCardTasks",
        }}
      />
    </div>
  );
};

const CardComponent = ({
  title,
  content,
}: {
  title: string;
  content: CardContent;
}) => {
  return (
    <div
      style={{
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        padding: "20px",
      }}
    >
      <CardHeader title={title} />
      <CardContent
        tasks={content.tasks}
        text={content.text}
        storageKey={content.storageKey}
      />
    </div>
  );
};

const CardHeader = ({ title }: { title: string }) => {
  return <h2>{title}</h2>;
};

const CardContent = ({ text, tasks, storageKey }: CardContent) => {
  return (
    <section>
      <p>{text}</p>
      <TaskList tasks={tasks} storageKey={storageKey} />
    </section>
  );
};

export default NoComponentComposition;
