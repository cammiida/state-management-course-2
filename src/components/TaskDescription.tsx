import React from "react";

type TaskDescriptionState = {
  title: string;
  sections: string[];
};

const TaskDescription = ({ title, sections }: TaskDescriptionState) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Description</h2>
      {sections && sections.map((section) => <p key={section}>{section}</p>)}
    </div>
  );
};

export default TaskDescription;
