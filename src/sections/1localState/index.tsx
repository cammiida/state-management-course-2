import React from "react";
import TaskDescription from "../../components/TaskDescription";
import TaskList from "../../components/TaskList";
import localStateTasks from "./localStateTasks";
import PostSearch from "./PostSearch";

const LocalStateExample = () => {
  return (
    <>
      <TaskDescription
        title="Local state"
        sections={[
          `This task is the introductory task to get you going. Let's start.`,
          `Below, you can see a list of posts fetched from the JSON placeholder API. Our goal is 
            to implement a simple local search function, in addition to showing some loading and 
            error correctly.`,
        ]}
      />
      <TaskList tasks={localStateTasks} storageKey="localStateTasks" />
      <PostSearch />
    </>
  );
};

export default LocalStateExample;
