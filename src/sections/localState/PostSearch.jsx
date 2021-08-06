import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const PostSearch = () => {
  const [searchVal, setSearchVal] = useState();

  const {
    data: posts,
    loading,
    error,
  } = useFetch(searchVal ? `/posts?userId=${searchVal}` : "/posts");

  const createContent = () => {
    if (loading) return "Loading...";
    if (error) {
      return (
        <p style={{ color: "red" }}>
          Something went wrong. The following error occurred: {error}
        </p>
      );
    }
    if (posts && posts.length) {
      return posts.map((post) => (
        <div
          style={{
            border: "1px solid #DDD",
            backgroundColor: "#EEE",
            padding: "10px 20px",
          }}
          key={post.id}
        >
          User: {post.userId}
          <br />
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ));
    }
    return `No posts found for user with id "${searchVal}"`;
  };

  return (
    <React.Fragment>
      {" "}
      <input
        value={searchVal}
        onChange={(e) => setSearchVal(e.currentTarget.value)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          textAlign: "left",
          marginTop: "20px",
        }}
      >
        {createContent()}
      </div>
    </React.Fragment>
  );
};

export default PostSearch;