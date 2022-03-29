import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Post } from "../../types";
import styles from "./styles.module.css";

const PostSearch = () => {
  const [searchVal, setSearchVal] = useState("");

  const {
    data: posts,
    loading,
    error,
  } = useFetch(!!searchVal ? `/posts?userId=${searchVal}` : "/posts");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleSearchChange: ", event);
    setSearchVal(event.currentTarget.value);
  };

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
      return posts.map((post: Post) => (
        <div className={styles.card} key={post.id}>
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
    <>
      <input value={searchVal} onChange={handleSearchChange} />
      <div className={styles.contentContainer}>{createContent()}</div>
    </>
  );
};

export default PostSearch;
