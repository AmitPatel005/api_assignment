

import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [data, setData] = useState([]);  
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
   
    const posts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const dataa = await response.json();
        setData(dataa);  
      } catch (err) {
        setError(err);  
      } finally {
        setLoading(false);  
      }
    };

    posts();
  }, []);  

  if (loading) {
    return <>Loading....</>;  
  }

  if (error) {
    return <>Error... {error.message}</>; 
  }

  return (
    <>
      <h2>Data List</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fetch;
