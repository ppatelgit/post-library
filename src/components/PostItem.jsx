import React from "react";
import styles from "./styles.module.scss";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.read ? "#28a745" : "#dc3545")};
  color: white;
  padding: 5px 10px;
  margin-top: 5px;
  cursor: pointer;
  border-radius: 3px;  
`;

const PostItem = ({ post, toggleReadStatus }) => {
  return (
    <div className={styles.postCard} style={{ backgroundColor: post.read ? "#d4edda" : "#f8d7da", width: '40%' }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Button onClick={() => toggleReadStatus(post.id)}>
        Mark as {post.read ? "Unread" : "Read"}
      </Button>
    </div>
  );
}

export default PostItem;
