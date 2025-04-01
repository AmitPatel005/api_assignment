import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";

const AxiosCrud = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 
  const [newPost, setNewPost] = useState({
    title: "",
    body: ""
  });

  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (e) {
        setError(e);
      }
    };
    fetchPosts();
  }, []);

  
  const handleCreate = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: newPost.title,
          body: newPost.body,
        }
      );
      setData([...data, response.data]); 
      setNewPost({ title: "", body: "" }); 
    } catch (error) {
      setError(error);
    }
  };

  
  const handleUpdate = async (id) => {
    const updatedPost = {
      title: "Updated Title",
      body: "Updated body content",
    };

    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        updatedPost
      );
      setData(
        data.map((post) =>
          post.id === id ? { ...post, ...updatedPost } : post
        )
      );
    } catch (error) {
      setError(error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setData(data.filter((post) => post.id !== id)); 
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <>Error: {error.message}</>;
  }

  return (
    <>
      <h2>Data List</h2>

    
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) =>
            setNewPost({ ...newPost, title: e.target.value })
          }
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) =>
            setNewPost({ ...newPost, body: e.target.value })
          }
        />
        <button onClick={handleCreate}>Add Post</button>
      </div>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          
            <button onClick={() => handleUpdate(post.id)}>Update</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};



export default AxiosCrud