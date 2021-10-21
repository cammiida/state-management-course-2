import React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import PostList from "./PostList";
import PostSearchSummary from "./PostSearchSummary";

const Parent = () => {
  const [searchVal, setSearchVal] = useState<string>();

  const {
    data: posts,
    loading,
    error,
  } = useFetch(searchVal ? `/posts?userId=${searchVal}` : "/posts");

  return (
    <div>
      <h1>Parent Component</h1>
      <input
        value={searchVal}
        onChange={(e) => setSearchVal(e.currentTarget.value)}
      />
      <PostSearchSummary posts={posts} />
      <PostList posts={posts} loading={loading} error={error} />
    </div>
  );
};

export default Parent;
