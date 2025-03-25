import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, filter, toggleReadStatus }) => {
  const filteredPosts = posts.filter((post) => {
    if (filter === "read") return post.read;
    if (filter === "unread") return !post.read;
    return true; 
  });

  return (
    <div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} toggleReadStatus={toggleReadStatus} />
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default PostList;
