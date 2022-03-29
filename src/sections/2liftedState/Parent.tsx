import React from "react";
import useFetch from "../../hooks/useFetch";

const Parent = () => {
  const { data: posts, loading, error } = useFetch("/posts");

  return (
    <div>
      <h1>Parent Component</h1>
    </div>
  );
};

export default Parent;
