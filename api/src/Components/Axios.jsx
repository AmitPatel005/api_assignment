import React, { useEffect, useState } from "react";
import axios from "axios";


const inters =()=>{
    axios.interceptors.request.use((request)=>{
        console.log("request",request)
        return request
    })
}

const Axios = () => {
  const [data, setData] = useState([]); // State to store data
  const [error, setError] = useState(null); // State to store errors
  const [loading, setLoading] = useState(true); // State for loading indicator


  useEffect(() => {
    inters()
    const post = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    post()
  }, []);


  if(loading){
    return <>loading...</>
  }
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
