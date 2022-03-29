import React from "react";
import { Post } from "../../types";

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
        ))}
      </>
    );
  }

  return <>No posts found for user</>;
};

export default PostList;
