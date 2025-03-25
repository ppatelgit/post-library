import React, { useState } from "react";
import styled from "styled-components";

const AddPostContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 20%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 20%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  cursor: pointer;
  margin-top: 5px;
`;

const AddPost= ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addPost(title, body);
      setTitle("");
      setBody("");
    }
  };

  return (
    <AddPostContainer>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
        <TextArea value={body} onChange={(e) => setBody(e.target.value)} /><br />
        <Button type="submit">Add Post</Button>
      </form>
    </AddPostContainer>
  );
}

export default AddPost;
