import React, { useEffect, useState } from "react";
import axios from "axios";


const Axios = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 


  useEffect(() => {
   
    const posts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (e) {
        setError(e);
      } 
    
    };
    posts()
  }, []);



  if(error){
    return <>err : {error}</>
  }

 
  return(
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
  )
};

export default Axios;
