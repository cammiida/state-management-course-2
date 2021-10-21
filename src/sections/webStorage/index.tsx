import React from "react";
import TaskDescription from "../../components/TaskDescription";
import TaskList from "../../components/TaskList";
import webStorageTasks from "../../data/webStorageTasks";

const WebStorageExample = () => {
  return (
    <>
      <TaskDescription
        title="Web storage"
        sections={[
          `You have probably noticed already that when we check a task as done in one page, navigate away, 
          and then come back, our changes weren't saved? That is a bit annoying, so let's fix that with the 
          help of web storage with localStorage.`,
        ]}
      />
      <TaskList tasks={webStorageTasks} storageKey="webStorageTasks" />
    </>
  );
};

export default WebStorageExample;
