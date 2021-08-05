import React from "react";

const TaskDescription = ({ title, sections }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Description</h2>
      {sections && sections.map((section) => <p key={section}>{section}</p>)}
    </div>
  );
};

export default TaskDescription;
