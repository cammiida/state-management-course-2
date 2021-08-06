import React from "react";

const PostSearchSummary = ({ posts }) => {
  const usersSet = new Set();
  posts && posts.forEach((post) => usersSet.add(post.userId));

  return (
    <div>
      Number of posts: {posts ? posts.length : "0"}
      <br />
      Different users: {Array.from(usersSet).length}
    </div>
  );
};

export default PostSearchSummary;
