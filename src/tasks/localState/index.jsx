import React from "react";
import TaskDescription from "../../components/TaskDescription";
import TaskList from "../../components/TaskList";
import PostSearch from "./PostSearch";

const localStateTasks = [
  {
    id: 1,
    text: "Create an input connected to a state using useState",
  },
  {
    id: 2,
    text: `Connect the input to the argument passed to useFetch so that it is
        '/posts?userId=searchVal' when the search value is not empty and only
        '/posts' if it is.`,
  },
  {
    id: 3,
    text: "Use the loading and error variables returned from the useFetch hook to display a 'loading' string or the error message for loading or errors, respectively.",
  },
];

const LocalStateExample = () => {
  return (
    <React.Fragment>
      <TaskDescription
        title="Local state"
        sections={[
          `This task is the introductory task to get you "in the game". Let's start.`,
          `Below, you can see a list of posts fetched from the JSON placeholder API. Our goal is 
            to implement a simple local search function, in addition to showing some loading and 
            error correctly.`,
        ]}
      />
      <TaskList tasks={localStateTasks} storageKey="localStateTasks" />
      <PostSearch />
    </React.Fragment>
  );
};

export default LocalStateExample;
