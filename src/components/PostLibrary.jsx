import React, { useState, useEffect, lazy } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import AddPost from "./AddPost";

const PostList = lazy(() => import("./PostList"));

const PostLibrary = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [filter, setFilter] = useState("all"); 

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
      setPosts(response.data.map((post) => ({ ...post, read: false })));
    } catch (err) {
      setError("Failed to fetch posts. Try again.");
    }
    setLoading(false);
  };

  const toggleReadStatus = (id) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, read: !post.read } : post)));
  };

  const addPost = (title, body) => {
    const newPost = { id: new Date(), title, body, read: false };
      setPosts([newPost, ...posts]);      
      setSuccess(true);
  };

  return (
    <div className={styles.container}>
      <h2>Post Library</h2>

      <AddPost addPost={addPost} />

      <label>Filter Posts: </label>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>

      {loading && <div style={{ fontSize: "18px" }}>Loading...</div>}

      {error && <p style={{ color: "red" }}>{error} <button onClick={fetchPosts}>Retry</button></p>}

      {success && <p style={{ color: "green" }}>Post added successfully!</p>}

      <PostList posts={posts} filter={filter} toggleReadStatus={toggleReadStatus} />
    </div>
  );
}

export default PostLibrary;
