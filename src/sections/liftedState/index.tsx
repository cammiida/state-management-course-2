import React from "react";
import Parent from "./Parent";
import liftedStateTasks from "../../data/liftedStateTasks";
import TaskList from "../../components/TaskList";
import TaskDescription from "../../components/TaskDescription";

const LiftedStateExample = () => {
  return (
    <>
      <TaskDescription
        title="Lifted state"
        sections={[
          `When two components that are not in direct vertical relation need the same state, 
          we need to lift the state up to the first common parent and pass it down as props 
          to the children that need it. Let's use the example of posts search from the local 
          state example. `,
        ]}
      />
      <TaskList tasks={liftedStateTasks} storageKey="liftedStateTasks" />
      <Parent />
    </>
  );
};

export default LiftedStateExample;
