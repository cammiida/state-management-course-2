import React from "react";
import { Post } from "../../types";
import styles from "./postList.module.css";

const PostList = ({
  posts,
  loading,
  error,
}: {
  posts: Post[];
  loading: boolean;
  error: Error | null;
}) => {
  if (loading) return <>"Loading..."</>;
  if (error) {
    return (
      <p style={{ color: "red" }}>
        Something went wrong. The following error occurred: {error}
      </p>
    );
  }
  if (posts && posts.length) {
    return (
      <>
        {posts.map((post) => (
          <div className={styles.card} key={post.id}>
            User: {post.userId}
            <br />
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    );
  }

  return <>No posts found for user</>;
};

export default PostList;
