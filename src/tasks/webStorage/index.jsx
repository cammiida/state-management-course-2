import React from "react";
import TaskDescription from "../../components/TaskDescription";

const webStoargeTasks = [
  { id: 1, text: "You have probably noticed already that when we try to " },
];

const WebStorageExample = () => {
  return (
    <React.Fragment>
      <TaskDescription title="Web storage" sections={[""]} />
    </React.Fragment>
  );
};

export default WebStorageExample;
