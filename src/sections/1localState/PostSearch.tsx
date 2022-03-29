import React from "react";
import useFetch from "../../hooks/useFetch";
import { Post } from "../../types";
import styles from "./styles.module.css";

const PostSearch = () => {
  const { data: posts, loading, error } = useFetch("/posts");

  const createContent = () => {
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
    return `No posts found`;
  };

  return (
    <>
      <div className={styles.contentContainer}>{createContent()}</div>
    </>
  );
};

export default PostSearch;
